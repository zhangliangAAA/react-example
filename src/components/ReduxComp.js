import React, { Component } from 'react';
import store from '../store'

class ReduxComp extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <p>{store.getState()}</p>
        <button onClick={()=> store.dispatch({type: 'add'})}>+</button>
        <button onClick={()=> store.dispatch({type: 'minus'})}>-</button>
      </div> 
    );
  }
}
 
export default ReduxComp;