import { CLEAR_USER_LIST, SET_USER_LIST } from '../actions/userList.js';

const INITIAL_STATE = {};

const reducers = {
  [CLEAR_USER_LIST]: () => ({}),
  [SET_USER_LIST]: (state, { userList }) => Object.assign({}, userList),
};

const userListReducer = (state = INITIAL_STATE, action) => (
  reducers[action.type] ? reducers[action.type](state, action) : state
);

export default userListReducer;
