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

export function startTimer(timerID) {
  return {
    type: types.START_TIMER,
    timerID
  };
}

export function stopTimer() {
  return {
    type: types.STOP_TIMER
  };
}

export function resetTimer() {
  return {
    type: types.RESET_TIMER
  };
}

export function decreaseTimer() {
  return {
    type: types.DECREASE_TIMER
  };
}

export function toggleBreak() {
  document.getElementById('beep').play();

  return {
    type: types.TOGGLE_BREAK
  };
}
