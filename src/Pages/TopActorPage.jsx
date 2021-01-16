/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import ActorCard from '../Components/Card/ActorCard';
import PageLoad from '../Components/ShowLoad/PageLoad';
import PagePagination from '../Components/Pagination/PagePagination';
import { TopActorContext } from '../Context/TopActor/TopActorProvider';
import axios from 'axios';
import '../Styles/actors-page.scss';

const TopActorPage = () => {
  const topContext = useContext(TopActorContext);
  const {
    getTopActors,
    topActorsCollect,
    onChangePaginate,
    currentPaginate,
    dispatch,
    isLoading,
    totalPaginate,
  } = topContext;

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    // set data on TopActorProvider
    getTopActors(source.token);

    /*
    This useEffect will clean up the data of GenresContext when unmounting || rerender the component
    */
    return () => {
      source.cancel('Operation canceled by the user');
      dispatch({ type: 'clear-top-actors' });
    };
  }, []);

  return (
    <div className="mn-actors">
      <div className="container">
        <h1 className="title mb30">Top 100 Actors</h1>
        <div className="row space-between">
          {topActorsCollect &&
            topActorsCollect.map(({ id, ...otherProps }) => (
              <ActorCard key={id} {...otherProps} movieId={id} />
            ))}
        </div>
      </div>

      {isLoading && <PageLoad />}

      <PagePagination
        totalPagination={totalPaginate}
        handleClick={onChangePaginate}
        currentPage={currentPaginate}
        color={'pgn-link-dark'}
      />
    </div>
  );
};

export default TopActorPage;
