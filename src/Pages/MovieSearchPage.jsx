/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import CollectMovies from '../Components/Collect-Movie/CollectMovies';
import PageLoad from '../Components/ShowLoad/PageLoad';
import { MovieSearchContext } from '../Context/MovieSearch/MovieSearchState';
import axios from 'axios';

const MovieSearchPage = (props) => {
  const searchContext = useContext(MovieSearchContext);
  const { searchResults, getSearchMovie, isLoading, dispatch } = searchContext;

  // RUN THIS METHOD WHEN searchValue gonna run
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    // query movieName
    const { movieName } = props.match.params;

    // set data on MovieSearchProvider
    getSearchMovie(movieName, source.token);

    return () => {
      source.cancel('Operation canceled by the user');
    };
  }, [props.match.params.movieName]);

  /*
    This useEffect will clean up the data of MovieSearchProvider when unmounting the component
  */
  useEffect(() => {
    return () => {
      dispatch({ type: 'empty-search-results' });
    };
  }, []);

  return (
    <div className="main-collections">
      <div className="container">
        {!isLoading && (
          <div className="search-box">
            <h1 className="search-title">Search Results</h1>
          </div>
        )}

        {isLoading && <PageLoad />}

        <CollectMovies moviesArray={searchResults} />
      </div>
    </div>
  );
};

export default withRouter(MovieSearchPage);
