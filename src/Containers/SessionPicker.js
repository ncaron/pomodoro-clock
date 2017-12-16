import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PickerHeader from '../Components/PickerHeader';
import PickerBody from '../Components/PickerBody';
import { decreaseSession, increaseSession, resetTimer } from '../actions';

class Session extends Component {
  constructor(props) {
    super(props);

    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  decrease() {
    this.props.decreaseSession();
    this.props.resetTimer();
  }

  increase() {
    this.props.increaseSession();
    this.props.resetTimer();
  }

  render() {
    return (
      <div className="sessionPicker">
        <PickerHeader PickerTitle="Session Length" />
        <PickerBody
          length={ this.props.formattedSession }
          decrease={ this.decrease }
          increase={ this.increase } />
      </div>
    );
  }
}

Session.propTypes = {
  formattedSession: PropTypes.string.isRequired,
  decreaseSession: PropTypes.func.isRequired,
  increaseSession: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({decreaseSession, increaseSession, resetTimer}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Session);
