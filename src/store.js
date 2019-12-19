import { createStore } from 'redux';

// 初始化Reducers
const createReducer = (state=0, action)=> {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
        return state - 1
    default:
      return state;
  }
}

const store = createStore(createReducer)

export default store;