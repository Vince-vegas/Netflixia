import React from 'react';
import SuggestedCard from '../Card/SuggestedCard';

const CollectSuggested = ({ movieArray }) => (
  <React.Fragment>
    {movieArray.map(({ id, ...otherProps }) => (
      <SuggestedCard key={id} {...otherProps} id={id} />
    ))}
  </React.Fragment>
);

export default CollectSuggested;
