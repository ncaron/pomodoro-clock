import * as types from './actionTypes';
import initialState from './initialState';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.DECREASE_BREAK: {
      if (state.break === 1) {
        return state;
      }

      let newState = Object.assign({}, state);
      newState.break--;

      return newState;
    }

    case types.INCREASE_BREAK: {
      if (state.break === 1) {
        return state;
      }

      let newState = Object.assign({}, state);
      newState.break++;

      return newState;
    }

    case types.DECREASE_SESSION: {
      if (state.session === 1) {
        return state;
      }

      let newState = Object.assign({}, state);
      newState.session--;

      return newState;
    }

    case types.INCREASE_SESSION: {
      if (state.session === 1) {
        return state;
      }

      let newState = Object.assign({}, state);
      newState.session++;

      return newState;
    }

    default:
      return state;
  }
}
