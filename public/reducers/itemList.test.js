import { CLEAR_ITEMS, REMOVE_ITEM, SET_ITEMS } from '../actions/itemList';
import deepFreeze from 'deep-freeze';
import itemListReducer from './itemList';

test('Returns state when no action matches', () => {
  const currentState = { x: 1 };

  const newState = itemListReducer(deepFreeze(currentState), { type: 'unknown' });

  expect(newState).toBe(currentState);
});

test('CLEAR_ITEMS', () => {
  const currentState = deepFreeze({ x: 1 });
  const expectedState = {};

  const newState = itemListReducer(currentState, { type: CLEAR_ITEMS });

  expect(newState).toEqual(expectedState);
});

test('REMOVE_ITEM', () => {
  const currentState = deepFreeze({ x: 1, y: 2 });
  const expectedState = { x: 1 };
  const id = 'y';

  const newState = itemListReducer(currentState, {
    id,
    type: REMOVE_ITEM,
  });

  expect(newState).not.toBe(expectedState);
  expect(newState).toEqual(expectedState);
});

test('SET_ITEMS', () => {
  const currentState = deepFreeze({ x: 1 });
  const expectedState = deepFreeze({ y: 2 });

  const newState = itemListReducer(currentState, {
    itemList: expectedState,
    type: SET_ITEMS,
  });

  expect(newState).not.toBe(expectedState);
  expect(newState).toEqual(expectedState);
});
