import itemService from '../services/itemService';

const CLEAR_ITEMS = 'CLEAR_ITEMS';
const LOAD_ITEMS = 'LOAD_ITEMS';
const SET_ITEMS = 'SET_ITEMS';

const clearItems = () => ({ type: CLEAR_ITEMS });

const setItems = itemList => ({
  type: SET_ITEMS,
  itemList,
});

const loadItems = userId => async (dispatch) => {
  dispatch(clearItems());

  try {
    const itemList = await itemService.getItems(userId);

    dispatch(setItems(itemList));
  } catch (e) {
    console.error(e);
  }
};

export {
  loadItems,
  setItems,
};

export {
  CLEAR_ITEMS,
  LOAD_ITEMS,
  SET_ITEMS,
};
