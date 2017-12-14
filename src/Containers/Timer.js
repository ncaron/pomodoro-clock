import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decreaseTimer } from '../actions';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = { intervalID: 0 };
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  toggleTimer() {
    if (this.state.intervalID) {
      this.setState({
        intervalID: clearInterval(this.state.intervalID)
      });
    } else {
      this.setState({
        intervalID: setInterval(() => {
          this.props.decreaseTimer();
        }, 1000)
      });
    }
  }

  render() {
    return (
      <div onClick={ this.toggleTimer }>{this.props.timer}</div>
    );
  }
}

Timer.propTypes = {
  timer: PropTypes.string.isRequired,
  decreaseTimer: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({decreaseTimer}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
