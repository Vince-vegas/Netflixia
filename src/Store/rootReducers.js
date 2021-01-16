import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './movies/moviesReducer';
import movieInfoReducer from './MovieInfo/movieInfoReducer';

const rootReducers = combineReducers({
  moviesState: moviesReducer,
  movieDetails: movieInfoReducer,
});

export default rootReducers;
