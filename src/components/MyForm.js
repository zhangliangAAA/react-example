import React, { Component } from 'react';
import { Icon, Input, Button } from 'antd';

//创建一个高阶组件：扩展现有表单、事件处理、数据收集、校验
function MyFormCreate(Comp) {
  return class extends Component{
    constructor(props) {
      super(props);
      this.options = {  }
      this.state = {}
    }
    // 设置
    handleChange = (e)=> {
      const {name, value} = e.target
      console.log('change-----',name, value);
      
      this.setState({
        [name]: value
      },()=> {
        //确保值已经存上
        this.validateField(name)
      })
      
    }
    // 单项-校验
    validateField = field => {
      // 1、获取校验规则
      const rules = this.options[field].rules
      // 任意一项失败
      const res = !rules.some(rule => {
        if(rule.required){
          if(!this.state[field]){ //校验失败
            this.setState({
              [field+'msg']: rule.message
            })
            return true
          }
        }
      })
      if(res){
        this.setState({
          [field+'msg']: ''
        })
      }
      return res
    }
    // 校验所有
    validateFields = cb => {
      const allRes = Object.keys(this.options).map(filed => this.validateField(filed))
      const res = allRes.every(res => res== true)
      cb(res,this.state)
    }
    // 创建input包装器
    getFieldDec = (field, option)=> {
      //保存当前输入项配置
      this.options[field] = option
      return InputComp => (
        <div>
          {React.cloneElement(InputComp,{
            name: field,
            value: this.state[field] || '',
            onChange: this.handleChange
          })}
          {this.state[field+'msg'] && <p style={ {color:"red"} }>{this.state[field+'msg']}</p>}
        </div>
    )}
    render(){
      return <Comp {...this.props} getFieldDec={this.getFieldDec} validateFields={this.validateFields}></Comp>
    }
  }
}



@MyFormCreate
class MyForm extends Component {
  constructor(props){
    super(props)
    this.state = {  }
  }
  
  onSubmit =()=> {
    console.log('onSubmit');
    this.props.validateFields((isValid, data)=> {
      if(isValid){
        //提交登录
        console.log('提交登录');
      }else{
        console.log('检验失败');
      }
    })
  }
  render() { 
    const {getFieldDec} = this.props
    return ( 
      <div>
        {getFieldDec('usename',{
          rules:[{required: true, message: 'Please input your username!' }]
        })(<Input></Input>)}
        {getFieldDec('pwd',{
          rules:[{required: true, message: 'Please input your password!' }]
        })(<Input type="password"></Input>)}
        <Button onClick={this.onSubmit}>登录</Button>
      </div>
     );
  }
}
 
export default MyForm;

