const fs = require('fs');
const path = require('path');

// 读取文件夹
const readDir = (path, isSync = false) => {
  if (!isSync) {
    return new Promise((resolve, reject) => {
      fs.readdir(path, (err, files) => err ? reject(err) : resolve(files));
    });
  }
  return fs.readdirSync(path);
};

// 读取文件
const readFile = (filePath, isSync = false) => {
  if (!isSync) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf-8', (err, data) => err ? reject(err) : resolve(data));
    });
  }
  return fs.readFileSync(filePath, 'utf-8');
}

// 写入文件
const writeFile = (path, data, isSync) => {
  if (!isSync) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, data, (err) => err ? reject(err) : resolve());
    });
  }
  return fs.writeFileSync(path, data);
}

// 创建文件夹
const createDir = (path, isSync = false) => {
  if (!isSync) {
    return new Promise((resolve, reject) => {
      fs.mkdir(path, (err) => err ? reject(err) : resolve());
    });
  }
  return fs.mkdirSync(path);
}

// 判断文件夹是否存在
const isExistsDir = (path, isSync = false) => {
  if (!isSync) {
    return new Promise((resolve, reject) => {
      fs.stat(path, (err, stats) => err ? reject(err) : resolve(stats.isDirectory()));
    });
  }
  try{
    return fs.statSync(path).isDirectory();
  } catch (e) {
    return false;
  }
}

// 删除文件夹
const rmDir = (pathUrl, isSync = false) => {
  if (isExistsDir(pathUrl, true)) {
    const files = readDir(pathUrl, true);
    files.forEach((file) => {
      if (isExistsDir(path.resolve(pathUrl, file), true)) {
        rmDir(path.resolve(pathUrl, file));
      } else {
        fs.unlinkSync(path.resolve(pathUrl, file));
      }
    });
  } else {
    fs.rmdirSync(pathUrl);
  }
}

module.exports = {
  readDir,
  readFile,
  writeFile,
  createDir,
  isExistsDir,
  rmDir,
}
