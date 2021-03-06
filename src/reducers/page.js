import { SET_PAGE } from '../actions/page.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = null;

const reducers = {
  [SET_PAGE]: (state, { page }) => page,
};

const routerReducer = createReducer(reducers, INITIAL_STATE);

export default routerReducer;
