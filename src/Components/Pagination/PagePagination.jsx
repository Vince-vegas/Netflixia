import React from 'react';
import Button from '../buttons/Button';
import PropTypes from 'prop-types';
import '../../Styles/pagination.scss';

const PagePagination = ({
  totalPagination,
  currentPage,
  handleClick,
  color,
}) => {
  return (
    <div className="pagination">
      <ul className="pgn-menu">
        {totalPagination.map((item) => {
          return (
            <li key={item} className="pgn-list">
              <Button
                className={`pgn-link ${color} ${
                  currentPage === item ? 'pgn-link--active' : ''
                }`}
                onClick={handleClick}
              >
                {item}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

PagePagination.defaultProps = {
  color: 'pgn-link-white',
};

PagePagination.propTypes = {
  totalPagination: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default PagePagination;
