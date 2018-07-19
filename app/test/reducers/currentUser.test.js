import { CLEAR_CURRENT_USER, SET_CURRENT_USER } from '../../public/actions/currentUser.js';
import deepFreeze from 'deep-freeze';
import reducer from '../../public/reducers/user.js';

test('Returns state when no action matches', () => {
  const currentState = { x: 1 };

  const newState = reducer(deepFreeze(currentState), { type: 'unknown' });

  expect(newState).toBe(currentState);
});

test('CLEAR_CURRENT_USER', () => {
  const currentState = deepFreeze({ x: 1 });
  const expectedState = {};

  const newState = reducer(currentState, { type: CLEAR_CURRENT_USER });

  expect(newState).toEqual(expectedState);
});

test('SET_CURRENT_USER', () => {
  const currentState = deepFreeze({ x: 1 });
  const expectedState = deepFreeze({ y: 2 });

  const newState = reducer(currentState, {
    user: expectedState,
    type: SET_CURRENT_USER,
  });

  expect(newState).not.toBe(expectedState);
  expect(newState).toEqual(expectedState);
});
