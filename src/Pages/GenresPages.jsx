import React from 'react';
import GenresLayout from '../Components/Collections-layout/GenresLayout';
import GenresState from '../Context/Genre/GenresState';

const GenresPages = () => (
  <GenresState>
    <GenresLayout />
  </GenresState>
);

export default GenresPages;
