import { CLEAR_ITEMS, SET_ITEMS } from '../actions/itemList';

const INITIAL_STATE = {};

const reducers = {
  [CLEAR_ITEMS]: () => ({}),
  [SET_ITEMS]: (state, { itemList }) => Object.assign({}, itemList),
};

const itemListReducer = (state = INITIAL_STATE, action) => (
  reducers[action.type] ? reducers[action.type](state, action) : state
);

export default itemListReducer;
