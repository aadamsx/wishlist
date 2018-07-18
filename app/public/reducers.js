import { combineReducers } from 'redux';
import currentUser from './reducers/currentUser.js';
import itemList from './reducers/itemList.js';
import loginStatus from './reducers/loginStatus.js';
import router from './reducers/router.js';
import userList from './reducers/userList.js';

export default combineReducers({
  currentUser,
  itemList,
  loginStatus,
  router,
  userList,
});
