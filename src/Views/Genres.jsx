import React, { Suspense, lazy } from 'react';

const GenresLoadable = () =>
  lazy(() => import('../Components/Collections-layout/'));

const Genres = () => {
  return <div></div>;
};

export default Genres;
