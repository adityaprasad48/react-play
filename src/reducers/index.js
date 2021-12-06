import { combineReducers } from 'redux';
import counter from './counter';
import contact from './contact';
import product from './product';

const allReducers = combineReducers({
	counter,
  contact,
  product,
});
export default allReducers;
