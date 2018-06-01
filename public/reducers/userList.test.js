import { SET_USERS } from '../actions/userList';
import deepFreeze from 'deep-freeze';
import reducer from './userList';

test('Returns state when no action matches', () => {
  const currentState = { x: 1 };

  const newState = reducer(deepFreeze(currentState), { type: 'unknown' });

  expect(newState).toBe(currentState);
});

test('SET_USERS', () => {
  const currentState = deepFreeze({ x: 1 });
  const expectedState = deepFreeze({ x: 1, y: 2 });

  const newState = reducer(currentState, {
    type: SET_USERS,
    userList: expectedState,
  });

  expect(newState).not.toBe(expectedState);
  expect(newState).toEqual(expectedState);
});
