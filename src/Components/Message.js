import React from 'react';
import PropTypes from 'prop-types';

const Message = ({onBreak}) => {
  return (
    <div className="message">
      <p className={ onBreak ? 'visible' : 'hidden' }>Enjoy your break!</p>
    </div>
  );
};

Message.propTypes = {
  onBreak: PropTypes.bool.isRequired,
};

export default Message;
