const path = require('path');
[
  'to',
  'msgLog',
  'parse',
].forEach((name) => {
  Object.assign(exports, require(`./${name}.js`));
});

exports.getFilesByExtension = (filesArr, ext) => {
  return filesArr.filter((file) => file.slice(-ext.length) === ext);
};

exports.path = path;

// 忽略文件夹
exports.ignores = ['style', 'index.js', 'development.md'];

exports.resolve = (...args) => {
  return path.resolve(__dirname, '..', '..', ...args);
}

exports.sortArr = (arr) => {
  return arr.sort((a, b) => {
    if (a.order && b.order) {
      return a.order > b.order ? 1
        : a.order < b.order ? -1
          : 0;
    }
  });
}



