import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {createReducer} from './countRedux';
// import { user } from "./userRedux";

import mySaga from './saga';
import createSagaMiddleware from "redux-saga";
import { user } from "./userSaga";

//1、创建sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
//2、并注册sagaMiddleware
const store = createStore(
  combineReducers({counter: createReducer,user}), //合并reducer
  applyMiddleware(logger,sagaMiddleware)
)
//3、运行sagaMiddleware
sagaMiddleware.run(mySaga)

export default store;