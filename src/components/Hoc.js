import React, { Component } from 'react';

function Kaike(props){
  return <div>{props.stage}-{props.name}</div>
}


const withKaike = Comp => {
  // name 可以来自接口等
  const name = '高阶组件'
  // return props => <Comp {...props} name={name}></Comp>
  return class NewComp extends React.Component{
    componentDidMount(){
      console.log('do ===== withKaike');
    }
    render() {
      return <Comp {...this.props} name={name}></Comp>
    }
  }
}

const withLog = Comp => {
  console.log('with Log');
  
  return props => <Comp {...props}></Comp>
}

// const NewKaike = withKaike(withLog(Kaike))

//es7装饰器

@withLog
@withKaike
@withLog
class Kaikeba extends Component {

  render() {
    return (
       <div>
         {this.props.stage}-{this.props.name}
       </div>
    );
  }
}

export default class Hco extends Component {
  render() {
    return (
       <div>
         <Kaikeba stage="React"></Kaikeba>
       </div>
    );
  }
};
