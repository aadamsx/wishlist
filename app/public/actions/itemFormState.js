/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const CLOSE_ITEM_FORM = 'CLOSE_ITEM_FORM';
const OPEN_ITEM_FORM = 'OPEN_ITEM_FORM';

const closeItemForm = () => ({ type: CLOSE_ITEM_FORM });
const openItemForm = () => ({ type: OPEN_ITEM_FORM });

export {
  CLOSE_ITEM_FORM,
  OPEN_ITEM_FORM,
};

export {
  closeItemForm,
  openItemForm,
};
