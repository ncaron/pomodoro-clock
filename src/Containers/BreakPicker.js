import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PickerHeader from '../Components/PickerHeader';
import PickerBody from '../Components/PickerBody';
import { decreaseBreak, increaseBreak, resetTimer } from '../actions';

class Break extends Component {
  constructor(props) {
    super(props);

    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  decrease() {
    this.props.decreaseBreak();
    this.props.resetTimer();
  }

  increase() {
    this.props.increaseBreak();
    this.props.resetTimer();
  }

  render() {
    return (
      <div className="breakPicker">
        <PickerHeader PickerTitle="Break Length" />
        <PickerBody
          length={ this.props.formattedBreak }
          decrease={ this.decrease }
          increase={ this.increase } />
      </div>
    );
  }
}

Break.propTypes = {
  formattedBreak: PropTypes.string.isRequired,
  decreaseBreak: PropTypes.func.isRequired,
  increaseBreak: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({decreaseBreak, increaseBreak, resetTimer}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Break);
