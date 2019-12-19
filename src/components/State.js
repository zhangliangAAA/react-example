import React,{Component} from 'react';

export default class StateTest extends Component {
   state = {
    count: 1
   }
   componentDidMount(){
    //无效
    //  this.state.count +=1;
    // 批量操作
    // this.setState(obj,cb)
    // this.setState({
    //   count: this.state.count +1
    // })
    // this.setState({
    //   count: this.state.count +1
    // }) // 等价只执行一次 
    
    //函数式赋值，后面值依赖上一次的
    // this.setState(fn,cb)
    this.setState(prevState => ({
      count: prevState.count+1
    }))
    this.setState(prevState => {
      return {
        count: prevState.count+1
      }
    })

   }
   componentWillUnmount(){
     this.timer = null
   }
   render(){
     return (
       <div>
         {this.state.count}
       </div>
     )
   }
}