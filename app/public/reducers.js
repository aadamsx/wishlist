import { combineReducers } from 'redux';
import currentUser from './reducers/currentUser.js';
import itemList from './reducers/itemList.js';
import page from './reducers/page.js';
import selectedUser from './reducers/selectedUser.js';
import userList from './reducers/userList.js';

export default combineReducers({
  itemList,
  page,
  selectedUser,
  currentUser,
  userList,
});
