const {
  to,
  errorLog,
  successLog,
  getFilesByExtension,
  parseMdFile,
  resolve,
  ignores,
} = require('./utils/util');
const {
  readDir,
  writeFile,
} = require('./utils/file');

// 生成菜单json
module.exports = async () => {
  let menu = [];
  // 读取组件文件菜单
  async function readComponentsMd() {
    const result = [];
    const components = readDir(resolve('components'), true);
    for (let component of components) {
      if (!ignores.includes(component)) {
        const componentPath = resolve('components', component);
        const [componentErr, componentFiles] = await to(readDir(componentPath));
        if (componentErr) {
          errorLog(`${component}文件夹读取失败`);
          return;
        }
        const mdFileArr = getFilesByExtension(componentFiles, 'md');
        if (mdFileArr.length === 0) {
          errorLog(`${component}组件缺少容器md文件`);
          return;
        }
        const mdFile = await parseMdFile(resolve('components', component, mdFileArr[0]), mdFileArr[0], component);
        const order = mdFile.header.order;
        if (result.length > 0 && result[0].order > order) {
          result.unshift({
            order: order,
            type: 'components',
            route: `/${component}`,
            title: mdFile.header.menuName || component,
          });
        } else {
          result.push({
            order: order,
            type: 'components',
            route: `/${component}`,
            title: mdFile.header.menuName || component,
          });
        }
      }
    }
    return result;
  }
  // 读取文档菜单
  async function readDocsMd() {
    const result = [];
    const docsPath = resolve('docs');
    const docsFiles = readDir(docsPath, true);
    const mdFileArr = getFilesByExtension(docsFiles, 'md');
    if (mdFileArr.length === 0) {
      errorLog(`${docsPath}文档文件夹缺少md文件`);
      return;
    }
    for (let doc of mdFileArr) {
      if (!ignores.includes(doc)) {
        const mdFile = await parseMdFile(resolve('docs', doc));
        const order = mdFile.header.order;
        if (result.length > 0 && result[0].order > order) {
          result.unshift({
            order: mdFile.header.order,
            type: 'docs',
            route: `/${doc.split('.')[0]}`,
            title: mdFile.header.menuName || doc.split('.')[0],
          })
        } else {
          result.push({
            order: mdFile.header.order,
            type: 'docs',
            route: `/${doc.split('.')[0]}`,
            title: mdFile.header.menuName || doc.split('.')[0],
          });
        }
      }
    }
    return result;
  }
  const docsMenu = await readDocsMd();
  const componentsMenu = await readComponentsMd();
  menu = menu.concat(docsMenu);
  if (componentsMenu.length > 0) {
    menu.push({
      type: 'components',
      title: 'components',
      groups: componentsMenu,
    })
  }
  const menuPath = resolve('site', 'menu.json');
  const [err] = await to(writeFile(menuPath, JSON.stringify(menu)));
  if (err) {
    errorLog(err);
    return;
  }
  successLog('菜单json生成完成');
}
