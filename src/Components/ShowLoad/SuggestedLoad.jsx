import React from 'react';
import ShowLoad from './ShowLoad';

const SuggestedLoad = () => {
  return (
    <div className="mn-showload">
      <ShowLoad addStyle={x} />
    </div>
  );
};

const x = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
};
export default SuggestedLoad;
