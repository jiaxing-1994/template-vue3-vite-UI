const {
  resolve,
  errorLog,
  successLog,
  to,
  ignores,
  parseMdFile,
  sortArr,
} = require('./utils/util');
const {
  readDir,
} = require('./utils/file');
const writeNormalFile = require('./utils/writeNormalFile');

module.exports = async () => {
  const componentsPath = resolve('components');
  const docsPath = resolve('docs');
  const [componentsErr, componentsFile] = await to(readDir(componentsPath));
  let componentInfo = [];
  let docInfo = [];
  if (componentsErr) {
    errorLog(`components-组件文件夹不存在, 跳过`);
  } else {
    componentInfo = await getRouteInfo(componentsFile);
  }
  let [docsErr, docsFile] = await to(readDir(docsPath));
  if (docsErr) {
    errorLog(`docs-文档文件夹不存在, 跳过`);
  } else {
    docInfo = await getRouteInfo(docsFile, true);
  }
  const importInfoStr = componentInfo[1].concat(docInfo[1]).join('');
  const routeStr = `
    const routers = [${componentInfo[0].concat(docInfo[0]).join(',')}];
    export default routers; 
  `;
  await writeNormalFile(importInfoStr + routeStr, resolve('site', 'router.js'));
  successLog('路由文件生成完成');
};

const generateImportInfo = (name, isDocs = false) => {
  const fromPath = isDocs ? `"./docs/${name}.vue"` : `"./components/${name}/index.vue"`;
  return `import ${name} from ${fromPath}\n`;
}

// 获取组件信息
const getRouteInfo = async (filesArr, isDocs = false) => {
  const importInfo = [];
  const routes = [];
  if (isDocs) {
    const temp = [];
    for (let name of filesArr) {
      const docPath = resolve('docs', name);
      const mdData = await parseMdFile(docPath);
      temp.push({
        order: mdData.header.order,
        name,
      })
    }
    filesArr = sortArr(temp).map((item) => item.name);
  }
  for (let name of filesArr) {
    if (!ignores.includes(name)) {
      name = name.split('.')[0];
      if (isDocs && routes.length === 0) {
        routes.unshift(`{path:"/", redirect: "/${name}"}`);
      }
      importInfo.push(generateImportInfo(name, isDocs));
      routes.push(`{path: "/${name}", component: ${name}}`);
    }
  }
  return [routes, importInfo];
}
