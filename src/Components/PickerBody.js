import React from 'react';
import PropTypes from 'prop-types';

const PickerBody = ({time, decrease, increase}) => {
  return (
    <div>
      <button onClick={ decrease }>-</button>
      <span>{time}</span>
      <button onClick={ increase }>+</button>
    </div>
  );
};

PickerBody.propTypes = {
  time: PropTypes.number.isRequired,
  decrease: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};

export default PickerBody;
