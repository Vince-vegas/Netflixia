/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { ActorsContext } from '../../../Context/Actors/ActorsProvider';
import ActorCard from '../../Card/ActorCard';

const ActorsLayout = () => {
  const actorsContext = useContext(ActorsContext);

  const { isLoading, actors, dispatch, fetchTopActors } = actorsContext;

  useEffect(() => {
    fetchTopActors(1);

    // reset the state when unmount
    return () => {
      dispatch({ type: 'CLEAR_TOP_ACTORS' });
    };
  }, []);

  return (
    <div className="mn-actors">
      <div className="container">
        <h1 className="title mb30">Top 100 Actors</h1>
        <div className="row space-between">
          {actors.map(({ id, ...otherProps }) => {
            return <ActorCard key={id} {...otherProps} movieId={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ActorsLayout;
