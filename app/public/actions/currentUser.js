/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

const clearCurrentUser = () => ({ type: CLEAR_CURRENT_USER });
const setCurrentUser = currentUser => ({ currentUser, type: SET_CURRENT_USER });

export {
  CLEAR_CURRENT_USER,
  SET_CURRENT_USER,
  clearCurrentUser,
  setCurrentUser,
};
