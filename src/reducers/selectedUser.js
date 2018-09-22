import { SET_SELECTED_USER } from '../actions/selectedUser.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = {};

const reducers = {
  [SET_SELECTED_USER]: (state, { id }) => ({ id }),
};

const selectedUserReducer = createReducer(reducers, INITIAL_STATE);

export default selectedUserReducer;
