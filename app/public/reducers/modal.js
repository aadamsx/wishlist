import { CLEAR_MODAL, SET_MODAL } from '../actions/modal.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = {
  isVisible: false,
  template: null,
};

const reducers = {
  [CLEAR_MODAL]: () => Object.assign({}, INITIAL_STATE),

  [SET_MODAL]: (state, { template }) => ({
    template,
    isVisible: true,
  }),
};

const modalReducer = createReducer(reducers, INITIAL_STATE);

export default modalReducer;
