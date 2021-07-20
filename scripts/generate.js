const generateComponents = require('./generateComponents');
const generateDocs = require('./generateDocs');
const generateMenu = require('./generateMenuJson');
const generateRouter = require('./generateRouter');

const generate = () => {
  // 生成组件的vue文件
  generateComponents();
  // 生成菜单json
  generateMenu();
  // 生成doc的vue文件
  generateDocs();
  // 生成路由文件
  generateRouter();
};

generate();

