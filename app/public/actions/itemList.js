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
const addItem = (title, price, url, category) => async (dispatch, getState) => {
  const { currentUser, itemList, selectedUser } = getState();

  try {
    const item = await itemService.addItem({
      category,
      price,
      title,
      url,
      userId: currentUser.id,
    });

    if (currentUser.id === selectedUser.id) {
      delete item.isBought;

      itemList[item.id] = item;

      dispatch(setItems(itemList));
    }
  } catch (e) {
    console.error(e);
  }
};

const buyItem = id => async (dispatch, getState) => {
  const { currentUser, itemList } = getState();

  try {
    const newItem = await itemService.buyItem(id, currentUser.id);

    itemList[id] = newItem;

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

const loadItemList = userId => async (dispatch, getState) => {
  dispatch(clearItemList());

  const { currentUser } = getState();

  try {
    const itemList = await itemService.getItems(userId);

    if (userId === currentUser.id) {
      Object.values(itemList).forEach((i) => {
        delete i.isBought;
      });
    }

    dispatch(setItems(itemList));
  } catch (e) {
    console.error(e);
  }
};

const unbuyItem = id => async (dispatch, getState) => {
  const { currentUser, itemList } = getState();

  try {
    const newItem = await itemService.unbuyItem(id, currentUser.id);

    itemList[id] = newItem;

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
  buyItem,
  clearItemList,
  deleteItem,
  loadItemList,
  unbuyItem,
};
