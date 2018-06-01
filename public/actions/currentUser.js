import userService from '../services/userService';

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

const clearCurrentUser = () => ({ type: CLEAR_CURRENT_USER });
const setCurrentUser = currentUser => ({ currentUser, type: SET_CURRENT_USER });

/* ----------------- */
/* -- API Actions -- */
/* ----------------- */
const loadCurrentUser = userId => async (dispatch, getState) => {
  const { currentUser } = getState();

  if (currentUser.id === userId) return;

  dispatch(clearCurrentUser());

  try {
    const user = await userService.getUser(userId);

    dispatch(setCurrentUser(user));
  } catch (e) {
    console.error(e);
  }
};

export {
  CLEAR_CURRENT_USER,
  SET_CURRENT_USER,
};

export { loadCurrentUser };
