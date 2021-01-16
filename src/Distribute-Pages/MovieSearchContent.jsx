import React from 'react';
import MovieSearchPage from '../Pages/MovieSearchPage';
import MovieSearchProvider from '../Context/MovieSearch/MovieSearchState';

const MovieSearchContent = () => (
  <MovieSearchProvider>
    <MovieSearchPage />
  </MovieSearchProvider>
);

export default MovieSearchContent;
