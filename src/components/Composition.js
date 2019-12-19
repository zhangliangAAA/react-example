import React from "react";


// Dialog作为容器不关心内容和逻辑
// 等同于vue中slot
function Dialog(props) {
  console.log('-----',props);
  
  return (
    <div style={{ border: `4px solid ${props.color || "blue"}` }}>
      {props.children}
      <div>
        {props.footer}
      </div>
    </div>
  );
}

// WelcomeDialog通过复合提供内容
function WelcomeDialog(props) {
  return (
    <Dialog {...props}>
      <h1>欢迎光临</h1>
      <p>感谢使用react</p>
    </Dialog>
  );
}

const Api = {
  getUser(){
    return {name: 'jerry', age: 20}
  }
}

function Fatcher(props) {
  const user = Api[props.name]()
  return props.children(user) //children可以是一个函数表达式
}

function Filter({children,type}) {
 return (
   <div>
     {React.Children.map(children,child => {
       if(child.type !== type){
         return
       }
       return child
     })}
   </div>
 )
}

function RadioGroup(props){
   return <div>
     {React.Children.map(props.children,child => {
      //  vdom不可更改，克隆一个新的去改
      //  child.props.name = props.name
      return React.cloneElement(child, {name: props.name})
     })}
   </div>
}

function Radio({children,...rest}){
  return (
    <label>
      <input type="radio" {...rest}></input>
      {children}
    </label>
  )
}

export default function(props){
  const footer = <button>按钮</button>
  return <div>
    {/* <WelcomeDialog {...props} footer={footer}></WelcomeDialog> */}
    <Fatcher name="getUser">
      {
        ({name,age}) => (
          <p>
            {name}-{age}
          </p>
        )
      }
    </Fatcher>
    <Filter type="p">
      <h1>React</h1>
      <p>React-----GG</p>
      <h1>Vue</h1>
      <p>Vue-----GG</p>
    </Filter>
    <RadioGroup name="mvvm">
      <Radio value="Vue">Vue</Radio>
      <Radio value="React">React</Radio>
    </RadioGroup>
  </div>
  
}