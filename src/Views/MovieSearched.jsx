import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CollectMovies from '../Components/Collect-Movie/CollectMovies';
import {
  fetchSearchedMovie,
  onResetState,
} from '../Store/NavSearch/searchReducer';

const MovieSearched = (props) => {
  const query = new URLSearchParams(props.location.search);
  const titleQuery = query.get('q');
  const movieSearchState = useSelector((state) => state.movieSearched);
  const dispatch = useDispatch();

  const { searchedValue, searchedMovie } = movieSearchState;

  useEffect(() => {
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
        <CollectMovies moviesArray={searchedMovie} />
      </div>
    </div>
  );
};

export default MovieSearched;
