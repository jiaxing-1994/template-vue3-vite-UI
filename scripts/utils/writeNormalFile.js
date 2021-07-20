const {
  errorLog,
  successLog,
  infoLog,
  to,
  resolve,
} = require('./util');
const {
  createDir,
  writeFile,
} = require('./file');

module.exports = async (data, savePath) => {
  // 创建文件夹
  async function createDirFunc(path, rest = []) {
    const [err] = await to(createDir(path));
    if (err) {
      errorLog(`${path}文件夹不存在，正在创建...`);
      const parentDir = resolve(path, '..');
      rest.unshift(path);
      await createDirFunc(parentDir, rest);
    } else {
      successLog(`${path}文件夹创建成功!`);
      if (rest.length > 0) {
        rest.forEach((item) => createDirFunc(item));
      }
    }
  }
  // 写入文件
  async function writeFileFunc(savePath, data) {
    const [err] = await to(writeFile(savePath, data));
    if (err) {
      infoLog(`正在创建文件夹`);
      const parentPath = resolve(savePath, '..');
      await createDirFunc(parentPath);
      infoLog(`正在写入文件`);
      await writeFileFunc(savePath, data);
    }
  }
  await writeFileFunc(savePath, data);
};
