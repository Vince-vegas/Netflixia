import React from 'react';
import PropTypes from 'prop-types';

const TrendList = ({ value, handleClick, sortValue, sortPage }) => (
  <li className="opt-list">
    <button
      className={`${
        sortValue === sortPage ? 'opt-btn opt-btn--active' : 'opt-btn'
      }`}
      onClick={handleClick}
    >
      {value}
    </button>
  </li>
);

TrendList.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  sortValue: PropTypes.string.isRequired,
  sortPage: PropTypes.string.isRequired,
};

export default TrendList;
