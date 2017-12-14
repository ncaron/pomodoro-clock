import React from 'react';
import PropTypes from 'prop-types';

const PickerBody = ({length, decrease, increase}) => {
  return (
    <div>
      <button onClick={ decrease }>-</button>
      <span>{length}</span>
      <button onClick={ increase }>+</button>
    </div>
  );
};

PickerBody.propTypes = {
  length: PropTypes.string.isRequired,
  decrease: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};

export default PickerBody;
