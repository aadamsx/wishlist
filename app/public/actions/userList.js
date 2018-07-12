import userService from '../services/userService.js';

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const CLEAR_USER_LIST = 'CLEAR_USER_LIST';
const SET_USER_LIST = 'SET_USER_LIST';

const clearUserList = () => ({ type: CLEAR_USER_LIST });
const setUserList = userList => ({ type: SET_USER_LIST, userList });

/* ----------------- */
/* -- API Actions -- */
/* ----------------- */
const loadUserList = () => async (dispatch) => {
  try {
    const userList = await userService.getUserList();

    dispatch(setUserList(userList));
  } catch (e) {
    console.error(e);
  }
};

export {
  CLEAR_USER_LIST,
  SET_USER_LIST,
};

export {
  clearUserList,
  loadUserList,
};
