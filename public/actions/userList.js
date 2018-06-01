import userService from '../services/userService';

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const SET_USERS = 'SET_USERS';

const setUsers = userList => ({ type: SET_USERS, userList });

/* ----------------- */
/* -- API Actions -- */
/* ----------------- */
const loadUsers = () => async (dispatch) => {
  try {
    const userList = await userService.getAllUsers();

    dispatch(setUsers(userList));
  } catch (e) {
    console.error(e);
  }
};

export { SET_USERS };

export { loadUsers };
