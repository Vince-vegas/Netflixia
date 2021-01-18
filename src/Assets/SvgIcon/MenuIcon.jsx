import React from 'react';

const MenuIcon = ({ ...otherProps }) => (
  <React.Fragment>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...otherProps}>
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
    </svg>
  </React.Fragment>
);

export default MenuIcon;