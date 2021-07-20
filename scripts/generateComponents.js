const {
  to,
  errorLog,
  successLog,
  getFilesByExtension,
  parseMdFile,
  ignores,
  resolve,
} = require('./utils/util');
const {
  readDir,
  isExistsDir,
  rmDir,
} = require('./utils/file');
const writeNormalFile = require('./utils/writeNormalFile');

// 生成单个demo组件容器
const generateDemoConainer = (demo) => {
  // 渲染demo实例内容
  const renderDemoComponent = (code) => {
    return `<div>${code}</div>`;
  }
  // 获取codeshow组件内容
  const renderCodeShow = (title, display, desc, code) => {
    return `
<code-show
  title="${title}"
>
  <template v-slot:example>
    ${display}
  </template>
  <template v-slot:desc>
    ${desc}
  </template>
  <template v-slot:code>
    ${code}
  </template>
</code-show>
    `
  }
  return renderDemoComponent(renderCodeShow(demo.header.title, demo.display, demo.desc.htmlMd, demo.html.htmlMd));
}
// 生成import信息
const generateImport = (component, name) => {
  return `import ${name} from './demo/${name}.vue'`;
}
// 生成组件容器
const generateVueContainer = async (componentFiles, componentPath, demos, component) => {
  // 获取唯一的容器md文件
  const containerMdFile = getFilesByExtension(componentFiles, 'md');
  if (containerMdFile.length === 0) {
    errorLog(`${component}组件没有md说明文件，请添加`);
    return;
  }
  // 读取容器的md文件
  const containerMdData = await parseMdFile(resolve(componentPath, containerMdFile[0]), containerMdFile[0], component);
  const demosHtmlArr = []; // code代码
  const importArr = []; // 配置import
  const demoComponents = []; // 配置component
  demos.forEach((demo) => {
    importArr.push(generateImport(component, demo.name));
    demoComponents.push(demo.name);
    demosHtmlArr.push(generateDemoConainer(demo));
  });
  const template = `
<template>
  <container>
    <template v-slot:desc>
      <h1>${containerMdData.header.title}${containerMdData.header.subTitle}</h1>
      ${containerMdData.desc.htmlMd}
    </template>
    <template v-slot:code>
      <gird>${demosHtmlArr.join(' ')}</gird>
    </template>
    <template v-slot:API>
      ${containerMdData.API.htmlMd}
    </template>
  </container>
</template>
<script>
import Container from '../../common/layout/container.vue';
import CodeShow from '../../common/layout/code-show.vue'
import Gird from '../../common/layout/grid.vue'
${importArr.join('\n')}
export default {
  components: {
    Container,
    CodeShow,
    Gird,
    ${demoComponents.join(',')}
  }
}
</script>
  `
  return template;
};
// 生成单个组件文件
const generateComponent = async (component) => {
  const componentPath = resolve('components', component);
  // 获取当前组件文件夹下的所有文件
  const [componentErr, componentFiles] = await to(readDir(componentPath));
  if (componentErr) {
    errorLog(`${component}不是文件夹`);
    return;
  }
  const componentDemoPath = resolve(componentPath, 'demo');
  // 获取demo文件夹下所有文件
  const [componentDemoErr, componentDemoFiles] = await to(readDir(componentDemoPath));
  if (componentDemoErr) {
    errorLog(`${component}/demo不存在，跳过`);
    return;
  }
  // 获取哦demo文件夹下的所有md文件;
  const demoMdFiles = getFilesByExtension(componentDemoFiles, 'md');
  // 获取所有demo内容数组
  const demos = await Promise.all(demoMdFiles.map((mdFile) => {
    const mdFilePath = resolve(componentDemoPath, mdFile);
    return parseMdFile(mdFilePath, mdFile, component);
  }));
  // 组件容器文件内容
  const containerHtml = await generateVueContainer(componentFiles, componentPath, demos, component);
  // 写入文件
  let containerPath = resolve('site', 'components', component, 'index.vue');

  // 删除已有的components和docs文件夹
  const siteComponentsPath = resolve('site', 'components');
  const siteDocsPath = resolve('site', 'docs');
  await rmDir(siteComponentsPath);
  await rmDir(siteDocsPath);

  await writeNormalFile(containerHtml, containerPath);
  for (let demo of demos) {
    let demoPath = resolve('site', 'components', component, 'demo', `${demo.name}.vue`);
    await writeNormalFile(demo.html.html, demoPath);
  }
  successLog('组件文件生成完成');
};

// 循环生成组件文件
module.exports = () => {
  const components = readDir(resolve('components'), true);
  components.forEach((component) => {
    !ignores.includes(component) && generateComponent(component);
  });
};
