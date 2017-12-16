import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startTimer, stopTimer, decreaseTimer, toggleBreak } from '../actions';
import Message from '../Components/Message';
import beep from '../assets/beep.mp3';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.toggleTimer = this.toggleTimer.bind(this);
  }

  toggleTimer() {
    if (this.props.timerID) {
      this.props.stopTimer();
    } else {
      this.props.startTimer(setInterval(() => {
        this.props.decreaseTimer();

        if (this.props.hours === 0 && this.props.minutes === 0 && this.props.seconds === 0) {
          this.props.toggleBreak();
        }
      }, 1000));
    }
  }

  render() {
    return (
      <div>
        <audio id="beep" src={ beep } />
        <p className="timer" onClick={ this.toggleTimer }>{this.props.formattedTimer}</p>
        <Message onBreak={ this.props.onBreak } />
      </div>
    );
  }
}

Timer.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  formattedTimer: PropTypes.string.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  decreaseTimer: PropTypes.func.isRequired,
  toggleBreak: PropTypes.func.isRequired,
  timerID: PropTypes.number.isRequired,
  onBreak: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const currentTimer = state.timers.current;

  return {
    hours: currentTimer.hours,
    minutes: currentTimer.minutes,
    seconds: currentTimer.seconds,
    formattedTimer: state.formattedTimer,
    timerID: state.timerID,
    onBreak: state.onBreak
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({startTimer, stopTimer, decreaseTimer, toggleBreak}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
