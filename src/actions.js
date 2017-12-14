import * as types from './actionTypes';

export function decreaseBreak() {
  return {
    type: types.DECREASE_BREAK
  };
}

export function increaseBreak() {
  return {
    type: types.INCREASE_BREAK
  };
}

export function decreaseSession() {
  return {
    type: types.DECREASE_SESSION
  };
}

export function increaseSession() {
  return {
    type: types.INCREASE_SESSION
  };
}
