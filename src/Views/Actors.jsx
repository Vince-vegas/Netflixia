import React from 'react';

import ActorsLayout from '../Components/Layout/Actors/ActorsLayout';
import ActorsProvider from '../Context/Actors/ActorsProvider';
import '../Styles/actors-page.scss';

const Actors = () => {
  return (
    <ActorsProvider>
      <ActorsLayout />
    </ActorsProvider>
  );
};

export default Actors;
