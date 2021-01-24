import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './movies/moviesReducer';
import movieInfoReducer from './MovieInfo/movieInfoReducer';
import actorMoviesReducer from '../Store/ActorMovies/actorMoviesReducer';
import searchReducer from '../Store/NavSearch/searchReducer';

const rootReducers = combineReducers({
  moviesState: moviesReducer,
  movieDetails: movieInfoReducer,
  actorMovies: actorMoviesReducer,
  navSearch: searchReducer,
});

export default rootReducers;
