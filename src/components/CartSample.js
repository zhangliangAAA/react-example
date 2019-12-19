import React,{Component} from 'react';

export default class CartSample extends Component { 
   constructor(props){
    super(props)
    this.state = {
      goods: [
        {id:1, text: 'Vue'},
        {id:2, text: 'React'},
      ],
      text:'',
      cart:[]
    }
    this.addGoods = this.addGoods.bind(this)
   }
   componentDidMount(){

   }
   componentWillUnmount(){

   }
   //箭头函数
   textChange = (e)=> {
     this.setState({
       text: e.target.value
     })
   }
   addGoods(){
     console.log('set');
     
     this.setState(prevState => {
       console.log(prevState.goods);
       
      return {
        goods:[ 
          ...prevState.goods,
          {
          id: prevState.goods.length+1,
          text: prevState.text
        }]
      }
     })
   }
   //  加购函数
   addToCart =(goods)=> {
     const newCart = [...this.state.cart]
     const idx = newCart.findIndex(c => c.id === goods.id)
     const item = newCart[idx]
     if(item){
        newCart.splice(idx,1,{...item, count: item.count+1})
     }else {
       newCart.push({...goods,count:1})
     }
     this.setState({
       cart: newCart
     })
   }

  minus = (goods)=> {
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.id === goods.id)
    const item = newCart[idx]
    newCart.splice(idx,1,{...item, count: item.count-1})
    this.setState({
      cart: newCart
    })
  }
  add = (goods)=> {
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.id === goods.id)
    const item = newCart[idx]
    newCart.splice(idx,1,{...item, count: item.count+1})
    this.setState({
      cart: newCart
    })
  }
  

   render(){
     const title = this.props.title ? <h1>{this.props.title}</h1> : null
     return (
       <div>
         {title}
         <div>
            <input type="text" value={this.state.text} onChange={this.textChange}></input>
            <button onClick={this.addGoods}>添加商品</button>
         </div>
         <ul>
     {this.state.goods.map(item => <li key={item.id}>{item.text}
      <button onClick={()=> this.addToCart(item)}>加入购物车</button>
     </li>)}
         </ul>
         <Cart data={this.state.cart} minus={this.minus} add={this.add}></Cart>
       </div>
     )
   }
}


function Cart({data,minus,add}){
  return (
    <table>
       <tbody>
        {data.map(d => (
          <tr>
            <td>{d.text}</td>
            <td>
              <button onClick={()=> minus(d)}>-</button>
              {d.count}
              <button onClick={()=> add(d)}>+</button>  
            </td>
          </tr>
        ))}
     </tbody>
    </table> 
  )
}