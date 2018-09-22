import { CLEAR_USER_LIST, SET_USER_LIST } from '../actions/userList.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = {};

const reducers = {
  [CLEAR_USER_LIST]: () => ({}),
  [SET_USER_LIST]: (state, { userList }) => Object.assign({}, userList),
};

const userListReducer = createReducer(reducers, INITIAL_STATE);

export default userListReducer;
