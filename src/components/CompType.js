import React from 'react'

// 函数类型组件 -适合简单渲染，不涉及生命周期； hook也可以啦（带生命周期）
export function Welcome1(props){
return <div>Welcome1，{props.name}</div>
}

// 基于类的组件，可以带生命周期
export class Welcome2 extends React.Component{
  render(){
  return <div>Welcome2,{this.props.name}</div>
  }
}