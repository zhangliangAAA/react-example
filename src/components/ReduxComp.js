import React, { Component } from 'react';
// import store from '../store'
import {connect} from 'react-redux'
import { add, minus,asyncAdd } from "../store/countRedux";
const mapStateToProps = state => {
  console.log('state',state);
  
  return {num: state.counter}
} //带命名空间

const mapDispathToProps = { add, minus,asyncAdd }

// const mapDispathToProps = {
//   add: ()=> ({type: 'add'}),
//   minus: () => ({type: 'minus'}),
//   asyncAdd: () => dispath => {
//     // 做异步处理
//     setTimeout(() => {
//       dispath({type: 'add'})
//     }, 1000);
//   }
// }

// class ReduxComp extends Component {
//   render() { 
//     return ( 
//       <div>
//         <p>{store.getState()}</p>
//         <button onClick={()=> store.dispatch({type: 'add'})}>+</button>
//         <button onClick={()=> store.dispatch({type: 'minus'})}>-</button>
//       </div> 
//     );
//   }
// }
// function ReduxComp({num, add, minus}) {
//   return ( 
//     <div>
//       <p>{num}</p>
//       <button onClick={add}>+</button>
//       <button onClick={minus}>-</button>
//     </div> 
//   );
// }
// export default connect(
//   mapStateToProps,
//   mapDispathToProps
// )(ReduxComp);

@connect(
  mapStateToProps,
  mapDispathToProps
)
class ReduxComp extends Component {
  constructor(props){
    super(props)
  }
  render() { 
    const {num, add, minus,asyncAdd} = this.props
    return ( 
      <div>
        <p>{num}</p>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={asyncAdd}>异步+</button>
      </div> 
    );
  }
}

export default ReduxComp;
