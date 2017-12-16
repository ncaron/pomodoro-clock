import React from 'react';
import PropTypes from 'prop-types';

const PickerBody = ({length, decrease, increase}) => {
  return (
    <div className="pickerBody">
      <p>{length}</p>
      <div>
        <button className="pickerButton" onClick={ decrease }>-</button>
        <button className="pickerButton" onClick={ increase }>+</button>
      </div>
    </div>
  );
};

PickerBody.propTypes = {
  length: PropTypes.string.isRequired,
  decrease: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};

export default PickerBody;
