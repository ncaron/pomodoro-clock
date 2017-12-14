import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PickerHeader from '../Components/PickerHeader';
import PickerBody from '../Components/PickerBody';
import { decreaseSession, increaseSession } from '../actions';

class Session extends Component {
  constructor(props) {
    super(props);

    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  decrease() {
    this.props.decreaseSession();
  }

  increase() {
    this.props.increaseSession();
  }

  render() {
    return (
      <div>
        <PickerHeader PickerTitle="Session Length" />
        <PickerBody
          time={ this.props.session }
          decrease={ this.decrease }
          increase={ this.increase } />
      </div>
    );
  }
}

Session.propTypes = {
  session: PropTypes.number.isRequired,
  decreaseSession: PropTypes.func.isRequired,
  increaseSession: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({decreaseSession, increaseSession}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Session);
