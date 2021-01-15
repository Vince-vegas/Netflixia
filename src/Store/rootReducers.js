import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './movies/movies';

const rootReducers = combineReducers({
  moviesState: moviesReducer,
});

export default rootReducers;
