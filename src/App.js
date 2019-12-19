import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Welcome1,Welcome2 } from './components/CompType'
import Clock from './components/Clock'
import StateTest from './components/State'
import Cart from './components/CartSample'
import Lifecycle from './components/Lifecycle'
import AntdTest from './components/AntdTest';
import CommentList from './components/CommentList';
import Hoc from './components/Hoc';
import Composition from './components/Composition';
import HookTest from './components/HookTest';
import ContextTest from './components/Context';
import WrappedNormalLoginForm from './components/AntdForm';
import MyForm from './components/MyForm';
import ReduxComp from './components/ReduxComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Welcome1 name="zlh"></Welcome1>
      <Welcome2 name="456"></Welcome2>
      <Clock></Clock>
      <StateTest></StateTest>
      <Cart title="条件渲染"></Cart> */}
      {/* <Lifecycle></Lifecycle>
      <AntdTest></AntdTest> */}
      {/* <CommentList></CommentList> */}
      {/* <Hoc></Hoc> */}
      {/* <Composition color="red"></Composition> */}
      {/* <HookTest></HookTest> */}
      {/* <ContextTest></ContextTest> */}
      {/* <WrappedNormalLoginForm></WrappedNormalLoginForm> */}
      {/* <MyForm></MyForm> */}
      <ReduxComp></ReduxComp>
    </div>
  );
}

export default App;
