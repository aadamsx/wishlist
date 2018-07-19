/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const SET_SELECTED_USER = 'SET_SELECTED_USER';

const setSelectedUser = selectedId => (dispatch, getState) => {
  const id = selectedId || getState().user.uid;

  dispatch({
    id,
    type: SET_SELECTED_USER,
  });
};

export {
  SET_SELECTED_USER,
  setSelectedUser,
};
