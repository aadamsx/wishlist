import { SET_HEADER_STATE } from '../actions/headerState.js';
import createReducer from '../utils/createReducer.js';
import HeaderState from '../utils/HeaderState.js';

const INITIAL_STATE = HeaderState.UNKNOWN;

const reducers = {
  [SET_HEADER_STATE]: (state, { headerState }) => headerState,
};

const headerStateReducer = createReducer(reducers, INITIAL_STATE);

export default headerStateReducer;
