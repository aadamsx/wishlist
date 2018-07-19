import itemService from '../services/itemService.js';

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const CLEAR_ITEMS = 'CLEAR_ITEMS';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SET_ITEMS = 'SET_ITEMS';

const clearItemList = () => ({ type: CLEAR_ITEMS });
const removeItem = id => ({ id, type: REMOVE_ITEM });
const setItems = itemList => ({ itemList, type: SET_ITEMS });

/* ----------------- */
/* -- API Actions -- */
/* ----------------- */
const addItem = title => async (dispatch, getState) => {
  const { itemList, user } = getState();

  try {
    const item = await itemService.addItem({
      title,
      userId: user.id,
    });

    itemList[item.id] = item;

    dispatch(setItems(itemList));
  } catch (e) {
    console.error(e);
  }
};

const deleteItem = id => async (dispatch) => {
  try {
    await itemService.deleteItem(id);

    dispatch(removeItem(id));
  } catch (e) {
    console.error(e);
  }
};

const loadItemList = userId => async (dispatch) => {
  dispatch(clearItemList());

  try {
    const itemList = await itemService.getItems(userId);

    dispatch(setItems(itemList));
  } catch (e) {
    console.error(e);
  }
};

export {
  CLEAR_ITEMS,
  REMOVE_ITEM,
  SET_ITEMS,
};

export {
  addItem,
  clearItemList,
  deleteItem,
  loadItemList,
};
