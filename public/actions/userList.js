import userService from '../services/userService';

const LOAD_USERS = 'LOAD_USERS';
const SET_USERS = 'SET_USERS';

const setUsers = userList => ({
  type: SET_USERS,
  userList,
});

const loadUsers = () => async (dispatch) => {
  try {
    const userList = await userService.getAllUsers();

    dispatch(setUsers(userList));
  } catch (e) {
    console.error(e);
  }
};

export {
  loadUsers,
  setUsers,
};

export {
  LOAD_USERS,
  SET_USERS,
};
