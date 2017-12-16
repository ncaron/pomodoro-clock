import React from 'react';
import PropTypes from 'prop-types';

const PickerHeader = ({PickerTitle}) => {
  return (
    <h2 className="pickerHeader">{PickerTitle}</h2>
  );
};

PickerHeader.propTypes = {
  PickerTitle: PropTypes.string.isRequired,
};

export default PickerHeader;
