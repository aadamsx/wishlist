import itemService from '../services/itemService';

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const CLEAR_ITEMS = 'CLEAR_ITEMS';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SET_ITEMS = 'SET_ITEMS';

const clearItems = () => ({ type: CLEAR_ITEMS });
const removeItem = id => ({ id, type: REMOVE_ITEM });
const setItems = itemList => ({ itemList, type: SET_ITEMS });

/* ----------------- */
/* -- API Actions -- */
/* ----------------- */
const addItem = title => async (dispatch, getState) => {
  const { currentUser, itemList } = getState();

  try {
    const item = await itemService.addItem({
      title,
      userId: currentUser.id,
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
  CLEAR_ITEMS,
  REMOVE_ITEM,
  SET_ITEMS,
};

export {
  addItem,
  deleteItem,
  loadItems,
};
