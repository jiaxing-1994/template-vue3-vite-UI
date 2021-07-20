const { readFile } = require('./file');
const { errorLog, to } = require('./util');
const marked = require('marked');

marked.setOptions({
  highlight(code) {
    const hljs = require('highlight.js');
    return hljs.highlight(code, { language: 'html' }).value;
  }
})

// 解析md文件
const parseMdFile = async (path, name = '', component = '') => {
  const [err, data] = await to(readFile(path));
  if (err) {
    errorLog(`${path}不存在`);
    return;
  }
  const json = {};
  name = name.split('.')[0];
  json.name = name;
  json.display = `<${name}></${name}>\n`;
  json.header = parseMdHeader(data);
  json.desc = parseMdDesc(data);
  json.html = parseMdHtml(data);
  json.API = parseAPIHtml(data);
  return json;
}

// 解析html内容
const parseMdHtml = (data) => {
  if (data.indexOf('````html') === -1) {
    return '';
  }
  const start = data.indexOf('````html') + 9;
  const end = data.indexOf('````', start + 1);
  const json = {};
  json.start = start;
  json.end = end;
  json.htmlMd = marked(data.slice(start - 8, end + 3));
  json.html = data.slice(start, end).replace(/\n|\r/g, '');
  return json;
};

// 解析API内容
const parseAPIHtml = (data) => {
  if (data.indexOf('## API_start') === -1) {
    return '';
  }
  const start = data.indexOf('## API_start') + 13;
  const end = data.indexOf('## API_end') -1;
  const json = {};
  json.start = start;
  json.end = end;
  json.htmlMd = marked(data.slice(start, end));
  return json;
}

// 解析描述信息
const parseMdDesc = (data) => {
  const start = data.indexOf('## desc_start') + 14;
  const end = data.indexOf('## desc_end') - 1;
  const json = {};
  json.start = start;
  json.end = end;
  json.html = data.slice(start, end).replace(/\n/g, '');
  json.htmlMd = marked(data.slice(start, end)).replace(/\n/g, '');
  return json;
};

// 解析md头部信息
const parseMdHeader = (data) => {
  const start = data.indexOf('---') + 4;
  const end = data.lastIndexOf('---') - 1;
  const json = {};
  json.start = start;
  json.end = end;
  data.slice(start, end).split('\n').forEach((el) => {
    const arr = el.split(':');
    if (arr.length === 2) {
      json[arr[0]] = arr[1].replace(/\s/g, '');
    }
  });
  return json;
}

module.exports = {
  parseMdFile,
}
