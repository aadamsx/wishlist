import { SET_SPINNER_VISIBILITY } from '../actions/spinner.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = true;

const reducers = {
  [SET_SPINNER_VISIBILITY]: (state, { visibility }) => visibility,
};

const spinnerReducer = createReducer(reducers, INITIAL_STATE);

export default spinnerReducer;
