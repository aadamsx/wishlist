import { CLEAR_ITEMS, REMOVE_ITEM, SET_ITEMS } from '../actions/itemList.js';

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

const itemListReducer = (state = INITIAL_STATE, action) => (
  reducers[action.type] ? reducers[action.type](state, action) : state
);

export default itemListReducer;
