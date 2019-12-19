import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {createReducer} from './countRedux';
import { user } from "./userRedux";


const store = createStore(
  combineReducers({counter: createReducer,user}), //合并reducer
  applyMiddleware(logger,thunk))

export default store;