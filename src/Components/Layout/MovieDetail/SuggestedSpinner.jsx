import React from 'react';
import Spinner from '../../Spinner/Spinner';

const SuggestedSpinner = () => (
  <div className="mn-showload">
    <Spinner addCssStyle={{ top: '50%', transform: 'translateY(-50%)' }} />
  </div>
);

export default SuggestedSpinner;
