import React from 'react';
import TopActorProvider from '../Context/TopActor/TopActorProvider';
import TopActorPage from '../Pages/TopActorPage';

const ActorsContent = () => (
  <TopActorProvider>
    <TopActorPage />
  </TopActorProvider>
);

export default ActorsContent;
