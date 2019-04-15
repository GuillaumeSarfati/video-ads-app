import { combineReducers } from 'redux';

import users from './users';

import advertisements from './advertisements';
import advertisement from './advertisement';

export default combineReducers({
  users,
  
  advertisements,
  advertisement,
});
