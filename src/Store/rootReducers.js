import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './movies/moviesReducer';
import movieInfoReducer from './MovieInfo/movieInfoReducer';
import actorMoviesReducer from '../Store/ActorMovies/actorMoviesReducer';
import searchReducer from '../Store/NavSearch/searchReducer';

// root dir of all actionReducers
const rootReducers = combineReducers({
  moviesState: moviesReducer,
  movieDetails: movieInfoReducer,
  actorMovies: actorMoviesReducer,
  movieSearched: searchReducer,
});

export default rootReducers;
