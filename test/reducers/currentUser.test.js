import { CLEAR_CURRENT_USER, SET_CURRENT_USER } from '../../public/actions/currentUser.js';
import deepFreeze from 'deep-freeze';
import reducer from '../../public/reducers/currentUser.js';

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
  const currentState = deepFreeze({
    uid: 1,
    displayName: 'test',
  });

  const newUser = deepFreeze({
    uid: 2,
    displayName: 'another test',
  });

  const expectedState = {
    id: 2,
    name: 'another test',
  };

  const newState = reducer(currentState, {
    currentUser: newUser,
    type: SET_CURRENT_USER,
  });

  expect(newState).not.toBe(newUser);
  expect(newState).toEqual(expectedState);
});
