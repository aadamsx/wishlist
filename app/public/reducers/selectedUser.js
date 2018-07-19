import { SET_SELECTED_USER } from '../actions/selectedUser.js';

const INITIAL_STATE = {};

const reducers = {
  [SET_SELECTED_USER]: (state, { id }) => ({ id }),
};

const userReducer = (state = INITIAL_STATE, action) => (
  reducers[action.type] ? reducers[action.type](state, action) : state
);

export default userReducer;
