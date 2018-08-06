import { CLEAR_CURRENT_ITEM, SET_CURRENT_ITEM } from '../actions/currentItem.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = {};

const reducers = {
  [CLEAR_CURRENT_ITEM]: () => ({}),
  [SET_CURRENT_ITEM]: (state, { currentItem }) => Object.assign({}, currentItem),
};

const currentItemReducer = createReducer(reducers, INITIAL_STATE);

export default currentItemReducer;
