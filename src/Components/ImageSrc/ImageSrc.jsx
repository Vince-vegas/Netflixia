import React from 'react';

const ImageSrc = ({ imgSrc, alt = null, ...otherProps }) => (
  <img src={imgSrc} alt={alt} {...otherProps} />
);

export default ImageSrc;
