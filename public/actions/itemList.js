import itemService from '../services/itemService';

const ADD_ITEM = 'ADD_ITEM';
const CLEAR_ITEMS = 'CLEAR_ITEMS';
const LOAD_ITEMS = 'LOAD_ITEMS';
const SET_ITEMS = 'SET_ITEMS';

const clearItems = () => ({ type: CLEAR_ITEMS });

const setItems = itemList => ({
  type: SET_ITEMS,
  itemList,
});

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
  addItem,
  loadItems,
  setItems,
};

export {
  ADD_ITEM,
  CLEAR_ITEMS,
  LOAD_ITEMS,
  SET_ITEMS,
};
