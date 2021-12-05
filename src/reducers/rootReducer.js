import { combineReducers } from 'redux';
import counter from './counterSlice';


export const rootReducer = combineReducers({
  counter
})