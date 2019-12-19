// 初始化Reducers
export  const createReducer = (state=0, action)=> {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
        return state - 1
    default:
      return state;
  }
}

export  const add = ()=> ({type: 'add'})
export  const  minus = () => ({type: 'minus'})
export  const  asyncAdd = () => dispath => {
    // 做异步处理
    setTimeout(() => {
      dispath({type: 'add'})
    }, 1000);
  }