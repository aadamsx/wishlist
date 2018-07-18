import { SET_LOGIN_STATUS } from '../actions/loginStatus.js';

const INITIAL_STATE = false;

const reducers = {
  [SET_LOGIN_STATUS]: (state, { isLoggedIn }) => isLoggedIn,
};

const loginStatusReducer = (state = INITIAL_STATE, action) => (
  reducers[action.type] ? reducers[action.type](state, action) : state
);

export default loginStatusReducer;
