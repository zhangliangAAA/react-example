import { call, put, takeEvery } from "redux-saga/effects";
// call 调用异步函数  put状态更新 takeEvery全局监听action
// 模拟登录
const UserService = {
  login(uname) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (uname === "Jerry") {
          resolve({ id: 1, name: "Jerry", age: 20 });
        } else {
        reject("用户名或密码错误"); 
        }
        }, 1000);
      }); 
  }
};
// generator函数---worker Saga 
function* login(action) {
  try {
    yield put({ type: "requestLogin" });
    const result = yield call(UserService.login, action.uname);
    yield put({ type: "loginSuccess", result });
  } catch (message) {
    yield put({ type: "loginFailure", message });
  } 
}
// 全局监听拦截器
function* mySaga() {
  yield takeEvery("login", login);
}
export default mySaga;

 