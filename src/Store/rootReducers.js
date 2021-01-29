import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './movies/moviesReducer';
import movieInfoReducer from './MovieInfo/movieInfoReducer';
import actorMoviesReducer from '../Store/ActorMovies/actorMoviesReducer';
import searchReducer from '../Store/NavSearch/searchReducer';
import navHandlerReducer from '../Store/NavHandler/navHandlerReducer';
import actorsReducer from '../Store/TopActors/actorsReducer';

// root dir of all actionReducers
const rootReducers = combineReducers({
  moviesState: moviesReducer,
  movieDetails: movieInfoReducer,
  topActors: actorsReducer,
  actorMovies: actorMoviesReducer,
  movieSearched: searchReducer,
  navHandlers: navHandlerReducer,
});

export default rootReducers;
