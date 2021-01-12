import React from 'react';

const InputField = ({ handleChange, onKeyPress, refValue, ...otherProps }) => (
  <input
    {...otherProps}
    onChange={handleChange}
    ref={refValue}
    onKeyPress={onKeyPress}
  />
);

InputField.defaultProps = {
  refValue: null,
  handleChange: null,
  onKeyPress: null,
};

export default InputField;
