/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import PageLoad from '../Components/ShowLoad/PageLoad';
import CollectMovies from '../Components/Collect-Movie/CollectMovies';
import PagePagination from '../Components/Pagination/PagePagination';
import { withRouter } from 'react-router-dom';
import { ActorMoviesContext } from '../Context/ActorMovies/ActorMoviesProvider';
import axios from 'axios';

const ActorMovies = (props) => {
  const actorMoviesContext = useContext(ActorMoviesContext);
  const {
    isLoading,
    getActorsMovie,
    movieCollected,
    actorDetail,
    dispatch,
    totalPaginate,
    onChangePaginate,
    currentPaginate,
  } = actorMoviesContext;

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const { actorsId } = props.match.params;
    getActorsMovie(parseInt(actorsId), source.token);

    // Empty the actors movie collection when unmounting the component
    return () => {
      source.cancel('Operation canceled by the user');
      dispatch({ type: 'empty-actor-movies' });
    };
  }, []);

  return (
    <div className="main-collections">
      <div className="container">
        <div className="search-box">
          <h1 className="search-title">{`${actorDetail.name}'s Movies`}</h1>
        </div>

        {/* Show Spinner if fetching */}
        {isLoading && <PageLoad />}

        <CollectMovies moviesArray={movieCollected} />
      </div>

      <PagePagination
        totalPagination={totalPaginate}
        handleClick={onChangePaginate}
        currentPage={currentPaginate}
      />
    </div>
  );
};

export default withRouter(ActorMovies);
