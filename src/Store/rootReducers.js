import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './movies/moviesReducer';
import movieInfoReducer from './MovieInfo/movieInfoReducer';
import actorMoviesReducer from '../Store/ActorMovies/actorMoviesReducer';

const rootReducers = combineReducers({
  moviesState: moviesReducer,
  movieDetails: movieInfoReducer,
  actorMovies: actorMoviesReducer,
});

export default rootReducers;
