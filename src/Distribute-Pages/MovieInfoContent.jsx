import React from 'react';
import MovieInfo from '../Pages/MovieInfo';
import DetailProvider from '../Context/MovieInfo/DetailState';

const MovieInfoContent = () => (
  <DetailProvider>
    <MovieInfo />
  </DetailProvider>
);

export default MovieInfoContent;
