import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'

// React负责逻辑控制
ReactDOM.render(<App />, document.getElementById('root'));

// 原始写法，子组件改变，再次渲染
store.subscribe(()=>
  ReactDOM.render(<App />, document.getElementById('root'))
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
