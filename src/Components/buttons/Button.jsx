import React from 'react';

const Button = ({ children, onClick = null, ...otherProps }) => (
  <button onClick={onClick} {...otherProps}>
    {children}
  </button>
);

export default Button;
