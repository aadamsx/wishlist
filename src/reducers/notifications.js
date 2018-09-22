import { ADD_NOTIFICATION, CLEAR_ALL_NOTIFICATIONS, REMOVE_NOTIFICATION } from '../actions/notifications.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = [];

let keyCounter = 0;

const reducers = {
  [ADD_NOTIFICATION]: (state, { isError, text }) => [
    {
      isError,
      key: keyCounter++,
      text,
    },

    ...state,
  ],

  [CLEAR_ALL_NOTIFICATIONS]: () => [],
  [REMOVE_NOTIFICATION]: (state, { key }) => state.filter(n => n.key !== key),
};

const notificationReducer = createReducer(reducers, INITIAL_STATE);

export default notificationReducer;
