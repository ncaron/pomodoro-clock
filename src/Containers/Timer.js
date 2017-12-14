import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Timer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.timer}</div>
    );
  }
}

Timer.propTypes = {
  timer: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Timer);
