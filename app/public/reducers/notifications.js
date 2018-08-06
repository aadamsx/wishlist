import { ADD_NOTIFICATION, CLEAR_ALL_NOTIFICATIONS, REMOVE_NOTIFICATION } from '../actions/notifications.js';

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

const notificationReducer = (state = INITIAL_STATE, action) => (
  reducers[action.type] ? reducers[action.type](state, action) : state
);

export default notificationReducer;
