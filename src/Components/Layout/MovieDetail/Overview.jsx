import React from 'react';

const Overview = ({ poster_path, title }) => {
  return (
    <div className="details">
      <div className="row justify-between info-row">
        <div className="col-lg-2 col-md-3 img-info">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
