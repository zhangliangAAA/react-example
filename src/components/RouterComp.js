import React, { Component,useState } from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
// import { login } from "../store/userRedux";
import { login } from "../store/userSaga";
function  Home(params) {
  return <div>
    <h3>课程列表</h3>
    <ul>
      <li><Link to='/detail/vue'>Vue</Link></li>
      <li><Link to='/detail/react'>React</Link></li>
      <li><Link to='/detail/node'>Nodejs</Link></li>
    </ul>
  </div>
}
function  About(params) {
  return <div>
    <h3>个人中心</h3>
    <div>
      <li><Link to='/about/me'>个人中心</Link></li>
      <li><Link to='/about/order'>订单查询</Link></li>
    </div>
    <Switch>
      <Route path="/about/me" component={()=> (<div>Me</div>)}></Route>
      <Route path="/about/order" component={()=> (<div>Order</div>)}></Route>
      <Redirect to="/about/me"></Redirect>
    </Switch>
  </div>
}
// 传递的是路由器对象
function  Detail(props) {
  console.log('--',props);
  // 1、history 命令式导航用
  // 2、match 用于获取参数等信息
  // 3、location 当前url信息
  return <div>
    Detail:---{props.match.params.name}
    <button onClick={props.history.goBack}>后退</button>
    </div>
}

function  NoMatch({location}) {
  return <div>404,{location.pathname}不存在 </div>
}

// 路由守卫，即高阶组件
// function  PrivateRoute({component: Comp, isLogin, ...rest}) {
//   // render: 根据条件动态渲染组件
//   return (
//     <Route {...rest} render={ 
//       props => isLogin ? <Comp/> : <Redirect to={{
//         pathname: "/login", 
//         state: {redirect: props.location.pathname}
//       }}/> 
//     }></Route>
//   )
// }

@connect(
  state => ({ isLogin: state.user.isLogin })
)
class PrivateRoute extends Component {
  constructor(props){
    super(props)
  }
  render() { 
    const {component: Comp, isLogin, ...rest} = this.props
    return ( 
      // render 动态加载
      <Route {...rest} 
        // component={Comp} 这个级别比render高
         render={ 
          props => isLogin ? <Comp/> : <Redirect to={{
            pathname: "/login", 
            state: {redirect: props.location.pathname}
          }}/> 
          }>
      </Route>
    )
  }
}


// 登录组件
const Login = connect(
  state => ({
    isLogin: state.user.isLogin,
    loading: state.user.loading,
    error: state.user.error
  }),
  { login }
)(function({ location, isLogin, login, loading, error }) {
  const redirect = location.state.redirect || "/";
  const [uname, setUname] = useState(""); // 用户名输入状态
  if (isLogin) {
    return <Redirect to={redirect} />;
  }

  return (
    <div>
      <p>用户登录</p>
      <hr />
      {/* 显示错误信息 */}
      { error && <p style={{color:'red'}}>{error}</p>} {/* 输入用户名 */}
      <input
        type="text"
        onChange={e => setUname(e.target.value)}
        value={uname}
      />
      <button onClick={()=>login(uname)} disabled={loading}>
        {loading ? "登录中..." : "登录"}
      </button>
    </div>
  );
});


class RouterComp extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <div>
      <BrowserRouter>
        {/* 导航链接 */}
        <ul>
          <li><Link to='/'>首页</Link></li>
          <li><Link to='/about'>关于</Link></li>
        </ul>
        {/* 路由配置： 路由即组件  exact:精确匹配 Switch用于只展示一个*/}
        <Switch>
          <Route exact path="/" component={Home}></Route> 
          <PrivateRoute path="/about" component={About}></PrivateRoute>
          <Route path="/detail/:name" component={Detail}></Route>
          <Route path="/login" component={Login}></Route>
          {/* 404无path */}
          <Route component={NoMatch}></Route>
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}
 
export default RouterComp;