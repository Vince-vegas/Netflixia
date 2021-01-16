import React from 'react';

const TrendList = ({ text, handleEvent, sortValue, currentSort }) => (
  <li className="opt-list">
    <button
      className={`${
        sortValue === currentSort ? 'opt-btn opt-btn--active' : 'opt-btn'
      }`}
      onClick={handleEvent}
    >
      {text}
    </button>
  </li>
);

export default TrendList;
