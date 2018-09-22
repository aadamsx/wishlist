/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const CLEAR_CURRENT_ITEM = 'CLEAR_CURRENT_ITEM';
const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';

const clearCurrentItem = () => ({ type: CLEAR_CURRENT_ITEM });
const setCurrentItem = currentItem => ({ currentItem, type: SET_CURRENT_ITEM });

export {
  CLEAR_CURRENT_ITEM,
  SET_CURRENT_ITEM,
  clearCurrentItem,
  setCurrentItem,
};
