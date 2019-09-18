import successReducer from './successReducer';
import { actionTypes } from '../actions';

describe('successReducer', () => {
  test('returns default state of false when no action provided', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });

  test('returns state of true upon receiving an action of type CORRECT_GUESS', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
  })
})