import {combineReducers, createStore} from 'redux'
import {getUserInfo} from '../reducers/login';
const reducer = combineReducers({getUserInfo});
const store = createStore(reducer);