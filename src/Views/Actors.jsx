import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ActorsLayout from '../Components/Layout/Actors/ActorsLayout';
import ActorsProvider from '../Context/Actors/ActorsProvider';
import '../Styles/actors-page.scss';

const Actors = () => {
  const dispatch = useDispatch();
  return (
    <ActorsProvider>
      <ActorsLayout />
    </ActorsProvider>
  );
};

export default Actors;
