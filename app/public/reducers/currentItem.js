import { CLEAR_CURRENT_ITEM, SET_CURRENT_ITEM } from '../actions/currentItem.js';

const INITIAL_STATE = {};

const reducers = {
  [CLEAR_CURRENT_ITEM]: () => ({}),
  [SET_CURRENT_ITEM]: (state, { currentItem }) => Object.assign({}, currentItem),
};

const currentItemReducer = (state = INITIAL_STATE, action) => (
  reducers[action.type] ? reducers[action.type](state, action) : state
);

export default currentItemReducer;
