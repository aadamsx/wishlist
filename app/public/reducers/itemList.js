import { CLEAR_ITEMS, REMOVE_ITEM, SET_ITEMS } from '../actions/itemList.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = {};

const reducers = {
  [CLEAR_ITEMS]: () => ({}),

  [REMOVE_ITEM]: (state, { id }) => {
    const itemList = Object.assign({}, state);

    delete itemList[id];

    return itemList;
  },

  [SET_ITEMS]: (state, { itemList }) => Object.assign({}, itemList),
};

const itemListReducer = createReducer(reducers, INITIAL_STATE);

export default itemListReducer;
