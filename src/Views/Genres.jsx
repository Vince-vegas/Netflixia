import React, { Suspense, lazy } from 'react';
import GenresLayout from '../Components/Collections-layout/GenresLayout';

const GenresLoadable = () =>
  lazy(() => import('../Components/Collections-layout/GenresLayout'));

const Genres = () => {
  return <div></div>;
};

export default Genres;
