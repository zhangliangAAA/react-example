import React, { Component } from 'react';

function Nike(props){
  return <div>{props.stage}-{props.name}</div>
}


const withAdidas = Comp => {
  // name 可以来自接口等
  const name = '高阶组件'
  // return props => <Comp {...props} name={name}></Comp>
  return class NewComp extends React.Component{
    componentDidMount(){
      console.log('do ===== withAdidas');
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

const withInfo = Comp => {
  console.log('with Info');
  return props => <Comp {...props}></Comp>
}

// const NewKaike = withAdidas(withLog(Nike))

//es7装饰器

@withLog
@withAdidas
@withInfo
class Sport extends Component {

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
         <Sport stage="React"></Sport>
       </div>
    );
  }
};
