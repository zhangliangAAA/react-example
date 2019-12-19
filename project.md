## 扩展webpack(类似于vue.config)
1、安装 npm install react-app-rewired@2.0.2-next.0 babel-plugin-import --save
2、在根目录级别增加 config-overrides.js 内容如示例代码
3、在package.json中将执行脚本的react-scripts替换成react-app-rewired
"scripts": {
  "start": "react-app-rewired start",
}

可用于antd按需加载、使用装饰器等

## Redux
注意：无异步处理
1、安装插件： npm install redux --save
2、app.js中应用 store.getState()
import React from 'react'
import store from './store'
class App extends React.Component{
  render(){
      return 
      <div>
        <p>{store.getState()}</p>
          <div>
              <button onClick={()=>store.dispatch({type:"add"})}>+</button>
              <button onClick={()=>store.dispatch({type:"minus"})}>-</button>
          </div>
      </div> 
  }
}
export default App
3、index.js 订阅，subscribe子组件更新后渲染
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import store from './store'
const render = ()=>{
  ReactDom.render(
    <App/>,
    document.querySelector('#root')
  )
} render()
store.subscribe(render)

## react-redux
1、安装： npm install react-redux --save
2、index.js 从Provider注入store
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
)
3、app.js中使用
import React from 'react'
import {connect} from 'react-redux'
const mapStateToProps = (state)=>{
    return {
        num:state
} }
const mapDispatchToProps = dispatch=>{
    return {
        add: ()=>dispatch({type:"add"}),
        minus: ()=>dispatch({type:"add"})
    }
}
class App extends React.Component{
    render(){
        return <div>
            <p>{this.props.num}</p>
            <div>
                <button onClick={()=>this.props.add()}>+</button>
                <button onClick={()=>this.props.minus()}>-</button>
            </div>
</div>
export default connect(mapStateToProps,mapDispatchToProps)(App)

## Redux 执行异步任务需要中间件支持
1、安装  npm install redux-thunk redux-logger --save
2、store 中使用applyMiddleware：
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
const counterReducer = (state = 0, action) => {...}
const store = createStore(
    counterReducer,
    applyMiddleware(logger,thunk)
  );
export default store

## react-router-4
1、安装 npm install --save react-router-dom
2、inde.js中应用 BrowserRouter：
import { BrowserRouter} from "react-router-dom";
ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root')
)
3、app.js配置、导航
import {Route,Link} from 'react-router-dom'
class App extends React.Component{
  render(){
    return <div>
      <ul>
<Link to="/">累加器</Link>
<Link to="/about">About</Link> <Link to="/detail">Detail</Link>
      </ul>
      <div>
      <Route exact path="/" component={Counter} />
      <Route path="/about" component={About} />
      <Route path="/detail" component={Detail} />
      </div>
</div>
} }

