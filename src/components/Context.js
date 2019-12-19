import React, { useContext,Component } from 'react';


// 创建上下文,不同组件使用时要在同一个地方导出
const MyContext = React.createContext();
const {Provider, Consumer} = MyContext

// 消费方式1： 使用 Consumer 获取值
function Child({foo}) {
  return (
    <div>
      Child---{foo}
    </div>
  )
}
// 消费方式2：使用 Hook获取
function Child2() {
  const ctx = useContext(MyContext)
  return (
    <div>
      Child2---{ctx.foo}
    </div>
  )
}
// 消费方式3：使用 Class获取
class Child3 extends Component {
  static contextType = MyContext;
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <div>
      Child3---{this.context.foo}
    </div> 
    );
  }
}
 

export default function ContextTest(params) {
  return (
    <div>
      <Provider value={{foo: 'bar'}}>
        {/* 消费方式1：Consumer */}
        <Consumer>
          {value => <Child {...value}></Child>}
        </Consumer>
        {/* 消费方式2：hook */}
        <Child2></Child2>
        {/* 消费方式3：hook */}
        <Child3></Child3>
      </Provider>
    </div>
  )
}
