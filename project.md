## 扩展webpack(类似于vue.config)
1、安装 npm install react-app-rewired@2.0.2-next.0 babel-plugin-import --save
2、在根目录级别增加 config-overrides.js 内容如示例代码
3、在package.json中将执行脚本的react-scripts替换成react-app-rewired
"scripts": {
  "start": "react-app-rewired start",
}

可用于antd按需加载、使用装饰器等

## Redux
无异步处理
安装插件： 
npm install redux-thunk redux-logger --save
