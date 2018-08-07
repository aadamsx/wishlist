/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const SET_HEADER_STATE = 'SET_HEADER_STATE';

const setHeaderState = headerState => ({ headerState, type: SET_HEADER_STATE });

export {
  SET_HEADER_STATE,
  setHeaderState,
};
