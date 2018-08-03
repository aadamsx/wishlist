/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
const CLEAR_ALL_NOTIFICATIONS = 'CLEAR_ALL_NOTIFICATIONS';
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

const addNotification = notification => ({ notification, type: ADD_NOTIFICATION });
const removeNotification = key => ({ key, type: REMOVE_NOTIFICATION });
const clearAllNotifications = () => ({ type: CLEAR_ALL_NOTIFICATIONS });

export {
  ADD_NOTIFICATION,
  CLEAR_ALL_NOTIFICATIONS,
  REMOVE_NOTIFICATION,
};

export {
  addNotification,
  clearAllNotifications,
  removeNotification,
};
