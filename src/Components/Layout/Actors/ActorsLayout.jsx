/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { ActorsContext } from '../../../Context/Actors/ActorsProvider';
import ActorCard from '../../Card/ActorCard';
import PagePagination from '../../Pagination/PagePagination';
import PageLoad from '../../ShowLoad/PageLoad';

const ActorsLayout = () => {
  const actorsContext = useContext(ActorsContext);

  const {
    isLoading,
    actors,
    dispatch,
    fetchTopActors,
    totalPage,
    page,
    onSetPage,
  } = actorsContext;

  useEffect(() => {
    fetchTopActors(1);
  }, [page]);

  useEffect(() => {
    // reset the state when unmount
    return () => {
      dispatch({ type: 'CLEAR_TOP_ACTORS' });
    };
  }, []);

  const handleSetPage = (id) => {
    onSetPage(id);
  };

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

      {/* Show Spinner when fetching */}
      {isLoading && <PageLoad />}

      <PagePagination
        totalPagination={totalPage}
        currentPage={page}
        handleClick={handleSetPage}
      />
    </div>
  );
};

export default ActorsLayout;
