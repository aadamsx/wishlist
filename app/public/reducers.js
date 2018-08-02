import { combineReducers } from 'redux';
import currentItem from './reducers/currentItem.js';
import currentUser from './reducers/currentUser.js';
import itemFormState from './reducers/itemFormState.js';
import itemList from './reducers/itemList.js';
import page from './reducers/page.js';
import selectedUser from './reducers/selectedUser.js';
import userList from './reducers/userList.js';

export default combineReducers({
  currentItem,
  currentUser,
  itemFormState,
  itemList,
  page,
  selectedUser,
  userList,
});
