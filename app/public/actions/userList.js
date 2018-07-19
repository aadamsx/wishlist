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
const loadUserList = () => async (dispatch, getState) => {
  const { userList } = getState();

  // List has already been loaded
  if (Object.keys(userList).length > 0) return;

  try {
    const list = await userService.getUserList();

    dispatch(setUserList(list));
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
