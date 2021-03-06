import { clearCurrentItem } from './currentItem.js';
import { clearModal } from './modal.js';
import { hideSpinner, showSpinner } from './spinner.js';
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
const addItem = (name, price, url, category) => async (dispatch, getState) => {
  dispatch(showSpinner());

  const { currentUser, itemList, selectedUser } = getState();

  try {
    const item = await itemService.addItem({
      category,
      name,
      price,
      url,
      userId: currentUser.id,
    });

    if (currentUser.id === selectedUser.id) {
      delete item.isBought;

      itemList[item.id] = item;

      dispatch(setItems(itemList));
      dispatch(clearModal());
      dispatch(hideSpinner());
    }
  } catch (e) {
    console.error(e);
  }
};

const buyItem = id => async (dispatch, getState) => {
  dispatch(showSpinner());

  const { currentUser, itemList } = getState();

  try {
    const newItem = await itemService.buyItem(id, currentUser.id);

    itemList[id] = newItem;

    dispatch(setItems(itemList));
    dispatch(hideSpinner());
  } catch (e) {
    console.error(e);
  }
};

const deleteItem = id => async (dispatch) => {
  dispatch(showSpinner());

  try {
    await itemService.deleteItem(id);

    dispatch(removeItem(id));
    dispatch(hideSpinner());
  } catch (e) {
    console.error(e);
  }
};

const loadItemList = userId => async (dispatch, getState) => {
  dispatch(showSpinner());
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
    dispatch(hideSpinner());
  } catch (e) {
    console.error(e);
  }
};

const unbuyItem = id => async (dispatch, getState) => {
  dispatch(showSpinner());

  const { currentUser, itemList } = getState();

  try {
    const newItem = await itemService.unbuyItem(id, currentUser.id);

    itemList[id] = newItem;

    dispatch(setItems(itemList));
    dispatch(hideSpinner());
  } catch (e) {
    console.error(e);
  }
};

const updateItem = (id, name, price, url, category) => async (dispatch, getState) => {
  dispatch(showSpinner());

  const { currentUser, itemList, selectedUser } = getState();

  try {
    const item = await itemService.updateItem(id, {
      category,
      name,
      price,
      url,
    });

    if (currentUser.id === selectedUser.id) {
      delete item.isBought;

      itemList[item.id] = item;

      dispatch(setItems(itemList));
      dispatch(clearModal());
      dispatch(clearCurrentItem());
      dispatch(hideSpinner());
    }
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
  updateItem,
};
