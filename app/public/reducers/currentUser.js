import { CLEAR_CURRENT_USER, SET_CURRENT_USER } from '../actions/currentUser.js';

const INITIAL_STATE = {};

const reducers = {
  [CLEAR_CURRENT_USER]: () => ({}),
  [SET_CURRENT_USER]: (state, { currentUser }) => ({
    id: currentUser.uid,
    name: currentUser.displayName,
  }),
};

const userReducer = (state = INITIAL_STATE, action) => (
  reducers[action.type] ? reducers[action.type](state, action) : state
);

export default userReducer;
