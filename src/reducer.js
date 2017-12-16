import * as types from './actionTypes';
import initialState from './initialState';

function formatLength({hours, minutes}) {
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

function formatTime({hours, minutes, seconds}) {
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

  fullTime = `${hours}:${minutes}:${seconds}`.replace(/^(00:00:0|00:00:|00:0|00:|0)/, '');

  return fullTime;
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.DECREASE_BREAK: {
      if (state.timers.break.hours === 0 && state.timers.break.minutes === 1) {
        return state;
      }

      let newState = Object.assign({}, state);

      if (newState.timers.break.minutes === 0) {
        newState.timers.break.minutes = 59;
        newState.timers.break.hours--;
      } else {
        newState.timers.break.minutes--;
      }

      newState.formattedBreak = formatLength(newState.timers.break);

      return newState;
    }

    case types.INCREASE_BREAK: {
      let newState = Object.assign({}, state);

      if (newState.timers.break.minutes === 59) {
        newState.timers.break.minutes = 0;
        newState.timers.break.hours++;
      } else {
        newState.timers.break.minutes++;
      }

      newState.formattedBreak = formatLength(newState.timers.break);

      return newState;
    }

    case types.DECREASE_SESSION: {
      if (state.timers.session.hours === 0 && state.timers.session.minutes === 1) {
        return state;
      }

      let newState = Object.assign({}, state);

      if (newState.timers.session.minutes === 0) {
        newState.timers.session.minutes = 59;
        newState.timers.session.hours--;
      } else {
        newState.timers.session.minutes--;
      }

      newState.formattedSession = formatLength(newState.timers.session);

      return newState;
    }

    case types.INCREASE_SESSION: {
      let newState = Object.assign({}, state);

      if (newState.timers.session.minutes === 59) {
        newState.timers.session.minutes = 0;
        newState.timers.session.hours++;
      } else {
        newState.timers.session.minutes++;
      }

      newState.formattedSession = formatLength(newState.timers.session);

      return newState;
    }

    case types.START_TIMER: {
      let newState = Object.assign({}, state);

      newState.timerID = action.timerID;

      // Hides the buttons while timer is active.
      const buttons = document.getElementsByClassName('pickerButton');
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.visibility = 'hidden';
        buttons[i].style.opacity = '0';
      }

      return newState;
    }

    case types.STOP_TIMER: {
      let newState = Object.assign({}, state);

      clearInterval(newState.timerID);
      newState.timerID = 0;

      // Shows the buttons when the timer is not active.
      const buttons = document.getElementsByClassName('pickerButton');
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.visibility = 'visible';
        buttons[i].style.opacity = '1';
      }

      return newState;
    }

    case types.RESET_TIMER: {
      let newState = Object.assign({}, state);

      newState.timers.current = JSON.parse(JSON.stringify(newState.timers.session));
      newState.formattedTimer = formatTime(newState.timers.current);

      return newState;
    }

    case types.DECREASE_TIMER: {
      let newState = Object.assign({}, state);

      if (newState.timers.current.seconds === 0) {
        newState.timers.current.seconds = 59;

        if (newState.timers.current.minutes === 0) {
          newState.timers.current.minutes = 59;
          newState.timers.current.hours--;
        } else {
          newState.timers.current.minutes--;
        }
      } else {
        newState.timers.current.seconds--;
      }

      newState.formattedTimer = formatTime(newState.timers.current);

      return newState;
    }

    case types.TOGGLE_BREAK: {
      let newState = Object.assign({}, state);

      newState.onBreak = !newState.onBreak;

      if (newState.onBreak) {
        newState.timers.current = JSON.parse(JSON.stringify(newState.timers.break));
      } else {
        newState.timers.current = JSON.parse(JSON.stringify(newState.timers.session));
      }

      return newState;
    }

    default:
      return state;
  }
}
