const {
  to,
  errorLog,
  successLog,
  parseMdFile,
  ignores,
  resolve,
} = require('./utils/util');
const {
  readDir,
} = require('./utils/file');
const writeNormalFile = require('./utils/writeNormalFile');

//生成doc文件
module.exports = async () => {
  const docsPath = resolve('docs');
  const [docsErr, docsFiles] = await to(readDir(docsPath));
  if (docsErr) {
    errorLog(`${docsPath}文件夹不存在`);
    return;
  }
  for (let docMd of docsFiles) {
    const mdData = await parseMdFile(resolve(docsPath, docMd), docMd);
    const template = `
<template>
  <container>
    <template v-slot:desc>
      <h1>${mdData.header.title}${mdData.header.subTitle || ''}</h1>
      ${mdData.desc.htmlMd}
    </template>
  </container>
</template>
<script>
import Container from '../common/layout/container.vue';
export default {
  components: {
    Container,
  }
}
</script>
  `;
    const docPath = resolve('site', 'docs', `${mdData.name}.vue`);
    await writeNormalFile(template, docPath);
  }
  successLog('文档文件生成完成');
}
