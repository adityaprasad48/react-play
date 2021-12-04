import { combineReducers } from 'redux';
import counter from './counter';
import contact from './contact';

const allReducers = combineReducers({
	counter,
  contact
});
export default allReducers;
