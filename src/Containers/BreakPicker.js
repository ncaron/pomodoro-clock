import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PickerHeader from '../Components/PickerHeader';
import PickerBody from '../Components/PickerBody';
import { decreaseBreak, increaseBreak } from '../actions';

class Break extends Component {
  constructor(props) {
    super(props);

    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  decrease() {
    this.props.decreaseBreak();
  }

  increase() {
    this.props.increaseBreak();
  }

  render() {
    return (
      <div>
        <PickerHeader PickerTitle="Break Length" />
        <PickerBody
          time={ this.props.break }
          decrease={ this.decrease }
          increase={ this.increase } />
      </div>
    );
  }
}

Break.propTypes = {
  break: PropTypes.number.isRequired,
  decreaseBreak: PropTypes.func.isRequired,
  increaseBreak: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({decreaseBreak, increaseBreak}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Break);
