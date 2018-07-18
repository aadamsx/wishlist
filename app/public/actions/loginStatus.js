/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';

const setLoginStatus = isLoggedIn => ({ isLoggedIn, type: SET_LOGIN_STATUS });

export {
  SET_LOGIN_STATUS,
  setLoginStatus,
};
