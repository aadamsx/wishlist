/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const CLEAR_MODAL = 'CLEAR_MODAL';
const SET_MODAL = 'SET_MODAL';

const clearModal = () => ({ type: CLEAR_MODAL });
const setModal = template => ({ template, type: SET_MODAL });

export {
  CLEAR_MODAL,
  SET_MODAL,
  clearModal,
  setModal,
};
