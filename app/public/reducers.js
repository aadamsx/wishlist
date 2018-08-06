import { combineReducers } from 'redux';
import currentItem from './reducers/currentItem.js';
import currentUser from './reducers/currentUser.js';
import itemList from './reducers/itemList.js';
import modal from './reducers/modal.js';
import notifications from './reducers/notifications.js';
import page from './reducers/page.js';
import selectedUser from './reducers/selectedUser.js';
import userList from './reducers/userList.js';

export default combineReducers({
  currentItem,
  currentUser,
  itemList,
  modal,
  notifications,
  page,
  selectedUser,
  userList,
});
