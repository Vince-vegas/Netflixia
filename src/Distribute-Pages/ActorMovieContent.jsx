import React from 'react';
import ActorMovies from '../Pages/ActorMovies';
import ActorMoviesProvider from '../Context/ActorMovies/ActorMoviesProvider';

const ActorMovieContent = () => (
  <ActorMoviesProvider>
    <ActorMovies />
  </ActorMoviesProvider>
);

export default ActorMovieContent;
