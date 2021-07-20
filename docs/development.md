# 开发文档
### 命令

```
npm run server     # 开启本地开发服务
npm run generate   # 生成site网站
npm run site       # 开启site网站服务
npm run build:site # 打包site网站
npm run build      # 打包组件库
```

### 目录结构

```
bulid/ # vite打包配置相关
    |-- vite.dev.config.js examples项目开发配置
    |-- vite.prd.config.js 组件库打包配置
    |-- vite.site.config.js site项目开发配置
script/ # node 脚本
	|-- generate.js 编译方法入口
	|-- generateComponents.js 生成组件
	|-- generateDocs.js 生成文档
    |-- generateMenuJson.js 生成菜单json
    |-- generateRouter.js 生成路由文件
	|-- utils 工具方法
components
	|--  _util # 公用方法
	|--  egComponent
		|-- dome # 用法相关文档
		|-- style # 样式文件夹
		|-- egComponent.vue # 示例组件
		|-- index.js # 出口文件
		|-- index.zh-CN.md 组件文档
	|-- ...
examples # 开发时预览界面
	|-- common # 公用组件
	|-- routers # 路由
		|-- egComponent # 组件开发页面
		|-- ...
	|-- App.vue # 根组件
docs # 除组件外的说明文档,依次创建即可
	|-- introduce #介绍文档
    |-- ...
site # 文档网站
	|-- docs # 由脚本生成对应 /docs 文件夹
	|-- style # 组件样式 复用ant-design一般情况下不做修改
	|-- components # 由脚本生成对应 /components 文件夹
	|-- common # 网站公共文件
		|-- layout # 布局组件
		|-- theme # 渲染 markdown 以及页面的主题 CSS
	|-- App.vue 
	|-- router.js # 自动生成的路由配置文件
	|-- index.js
	|-- index.html 
    |-- menu.json # 自动生成的菜单文件
		 
````

### 开发流程


