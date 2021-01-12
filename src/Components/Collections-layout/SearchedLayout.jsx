/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PageLoad from '../ShowLoad/PageLoad';
import CollectMovies from '../Collect-Movie/CollectMovies';

const SearchedLayout = ({ isLoading, dataArray, searchText, children }) => {
  return (
    <div className="main-collections">
      <div className="container">
        {!isLoading && (
          <div className="search-box">
            <h1 className="search-title">{searchText}</h1>
          </div>
        )}

        {/* Show Spinner if fetching */}
        {isLoading && <PageLoad />}

        <CollectMovies moviesArray={dataArray} />
      </div>
      {children}
    </div>
  );
};

export default SearchedLayout;
