import { SET_USERS } from '../actions/userList';

const INITIAL_STATE = {};

const reducers = {
  [SET_USERS]: (state, { userList }) => Object.assign({}, userList),
};

const userListReducer = (state = INITIAL_STATE, action) => (
  reducers[action.type] ? reducers[action.type](state, action) : state
);

export default userListReducer;
