import { CLOSE_ITEM_FORM, OPEN_ITEM_FORM } from '../actions/itemFormState.js';

const INITIAL_STATE = false;

const reducers = {
  [CLOSE_ITEM_FORM]: () => false,
  [OPEN_ITEM_FORM]: () => true,
};

const itemStateReducer = (state = INITIAL_STATE, action) => (
  reducers[action.type] ? reducers[action.type](state, action) : state
);

export default itemStateReducer;
