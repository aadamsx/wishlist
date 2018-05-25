import { CLEAR_CURRENT_USER, SET_CURRENT_USER } from '../actions/currentUser';

const INITIAL_STATE = {};

const reducers = {
  [CLEAR_CURRENT_USER]: () => ({}),
  [SET_CURRENT_USER]: (state, { currentUser }) => Object.assign({}, currentUser),
};

const currentUserReducer = (state = INITIAL_STATE, action) => (
  reducers[action.type] ? reducers[action.type](state, action) : state
);

export default currentUserReducer;
