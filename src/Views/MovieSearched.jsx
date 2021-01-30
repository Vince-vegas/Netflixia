import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CollectMovies from '../Components/Collect-Movie/CollectMovies';
import PageLoad from '../Components/ShowLoad/PageLoad';
import {
  fetchSearchedMovie,
  onResetState,
} from '../Store/NavSearch/searchReducer';
import '../Styles/genres-layout.scss';

const MovieSearched = (props) => {
  const query = new URLSearchParams(props.location.search);
  const titleQuery = query.get('q').trim();
  const movieSearchState = useSelector((state) => state.movieSearched);
  const dispatch = useDispatch();

  const { searchedValue, searchedMovie, isLoading } = movieSearchState;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSearchedMovie(titleQuery));
  }, [searchedValue]);

  // reset the state when unmount
  useEffect(() => {
    return () => {
      dispatch(onResetState());
    };
  }, []);

  return (
    <div className="main-collections">
      <div className="container">
        <div className="search-box">
          <h1 className="search-title">Search Results</h1>
        </div>

        {/* Show Spinner when fetching */}
        {isLoading && <PageLoad />}

        <CollectMovies moviesArray={searchedMovie} />
      </div>
    </div>
  );
};

export default MovieSearched;
