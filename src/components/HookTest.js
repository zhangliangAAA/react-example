import React, { useState, useEffect } from 'react';

export default function HookTest(){
  
  //自定义Hook，名称为 use 开头，函数内部可以调用其他钩子
  function useAge(num) {
    const [age,setAge] = useState(num|| 0)
    useEffect(()=> {
      setTimeout(() => {
        setAge(20)
      }, 2000);
    })
    return age;
  }

  // 如果只想执行一次，可以传入第二个参数为[] <==> componentDidMount
  useEffect(() => {
    console.log('useEffect____once');
  },[]);

  // useState(initState)
  const [count, setCount] = useState(0)
   // 相当于 componentDidMount、componentDidUpdate、componentWillUnmount
   useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
    console.log('all-changes-work');
  },[count]); //指定依赖count，即count变化时才执行;

  const age = useAge()
  const [fruit, setFruit] = useState('banana')
  const [fruits, setFruits] = useState(['banana','apple','origin'])
  const [input, setInput] = useState('')
  return (
    <div>
      <p>点击了{count}次</p>
      <button onClick={()=>setCount(count+1)}>state</button>
      <p>年龄{age ? age : 'loading...'}</p>
      <p>被选中的水果：{fruit}</p>
      <p>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={()=>{
          setInput('')
          setFruits([...fruits,input])}}>
            新增水果
        </button>
      </p>
      <ul>
        {fruits.map(f => (<li key={f} onClick={()=> setFruit(f)}>{f}</li>))}
      </ul>
    </div>
  )
}