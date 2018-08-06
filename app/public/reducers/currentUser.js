import { CLEAR_CURRENT_USER, SET_CURRENT_USER } from '../actions/currentUser.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = {};

const reducers = {
  [CLEAR_CURRENT_USER]: () => ({}),

  [SET_CURRENT_USER]: (state, { currentUser }) => ({
    id: currentUser.id,
    name: currentUser.name,
  }),
};

const currentUserReducer = createReducer(reducers, INITIAL_STATE);

export default currentUserReducer;
