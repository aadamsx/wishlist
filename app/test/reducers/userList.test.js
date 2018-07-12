import { SET_USER_LIST } from '../../public/actions/userList.js';
import deepFreeze from 'deep-freeze';
import reducer from "../../public/reducers/userList.js";

test('Returns state when no action matches', () => {
  const currentState = { x: 1 };

  const newState = reducer(deepFreeze(currentState), { type: 'unknown' });

  expect(newState).toBe(currentState);
});

test('SET_USER_LIST', () => {
  const currentState = deepFreeze({ x: 1 });
  const expectedState = deepFreeze({ x: 1, y: 2 });

  const newState = reducer(currentState, {
    type: SET_USER_LIST,
    userList: expectedState,
  });

  expect(newState).not.toBe(expectedState);
  expect(newState).toEqual(expectedState);
});
