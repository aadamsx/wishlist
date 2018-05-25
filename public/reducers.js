import { combineReducers } from 'redux';
import currentUser from './reducers/currentUser';
import itemList from './reducers/itemList';
import userList from './reducers/userList';

export default combineReducers({
  itemList,
  currentUser,
  userList,
});
