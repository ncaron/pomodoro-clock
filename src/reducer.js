import * as types from './actionTypes';
import initialState from './initialState';

function formatLength(hours, minutes) {
  let formattedLength = '';

  if (hours === 1) {
    formattedLength += '1 Hour';
  } else if (hours > 1) {
    formattedLength += String(hours) + ' Hours';
  }

  if (hours > 0 && minutes > 0) {
    formattedLength += ' ';
  }

  if (minutes === 1) {
    formattedLength += '1 Minute';
  } else if (minutes > 1) {
    formattedLength += String(minutes) + ' Minutes';
  }

  return formattedLength;
}

function formatTime(hours, minutes, seconds) {
  let fullTime = '';
  hours = String(hours).split('');
  minutes = String(minutes).split('');
  seconds = String(seconds).split('');

  if (hours.length < 2) {
    hours.unshift('0');
  }

  if (minutes.length < 2) {
    minutes.unshift('0');
  }

  if (seconds.length < 2) {
    seconds.unshift('0');
  }

  hours = hours.join('');
  minutes = minutes.join('');
  seconds = seconds.join('');

  fullTime = `${hours}:${minutes}:${seconds}`.replace(/^(00:00:|00:)/, '');

  return fullTime;
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.DECREASE_BREAK: {
      if (state.breakHours === 0 && state.breakMinutes === 1) {
        return state;
      }

      let newState = Object.assign({}, state);

      if (newState.breakMinutes === 0) {
        newState.breakMinutes = 59;
        newState.breakHours--;
      } else {
        newState.breakMinutes--;
      }

      newState.formattedBreak = formatLength(newState.breakHours, newState.breakMinutes);

      return newState;
    }

    case types.INCREASE_BREAK: {
      let newState = Object.assign({}, state);

      if (newState.breakMinutes === 59) {
        newState.breakMinutes = 0;
        newState.breakHours++;
      } else {
        newState.breakMinutes++;
      }

      newState.formattedBreak = formatLength(newState.breakHours, newState.breakMinutes);

      return newState;
    }

    case types.DECREASE_SESSION: {
      if (state.sessionHours === 0 && state.sessionMinutes === 1) {
        return state;
      }

      let newState = Object.assign({}, state);

      if (newState.sessionMinutes === 0) {
        newState.sessionMinutes = 59;
        newState.sessionHours--;
      } else {
        newState.sessionMinutes--;
      }

      newState.timer = formatTime(newState.sessionHours, newState.sessionMinutes, newState.sessionSeconds);
      newState.formattedSession = formatLength(newState.sessionHours, newState.sessionMinutes);

      return newState;
    }

    case types.INCREASE_SESSION: {
      let newState = Object.assign({}, state);

      if (newState.sessionMinutes === 59) {
        newState.sessionMinutes = 0;
        newState.sessionHours++;
      } else {
        newState.sessionMinutes++;
      }

      newState.timer = formatTime(newState.sessionHours, newState.sessionMinutes, newState.sessionSeconds);
      newState.formattedSession = formatLength(newState.sessionHours, newState.sessionMinutes);

      return newState;
    }

    case types.DECREASE_TIMER: {
      let newState = Object.assign({}, state);

      if (newState.sessionSeconds === 0) {
        newState.sessionSeconds = 59;

        if (newState.sessionMinutes === 0) {
          newState.sessionMinutes = 59;
          newState.sessionHours--;
        } else {
          newState.sessionMinutes--;
        }
      } else {
        newState.sessionSeconds--;
      }

      newState.timer = formatTime(newState.sessionHours, newState.sessionMinutes, newState.sessionSeconds);

      return newState;
    }

    default:
      return state;
  }
}
