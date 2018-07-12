import { SET_PAGE } from '../actions/router.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = {};

const reducers = {
  [SET_PAGE]: (state, { page }) => ({ page }),
};

const currentUserReducer = createReducer(reducers, INITIAL_STATE);

export default currentUserReducer;
