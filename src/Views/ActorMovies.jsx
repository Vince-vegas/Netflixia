/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchActorMovies,
  resetState,
} from '../Store/ActorMovies/actorMoviesReducer';
import CollectMovies from '../Components/Collect-Movie/CollectMovies';
import { useSelector, useDispatch } from 'react-redux';
import '../Styles/genres-layout.scss';
import PageLoad from '../Components/ShowLoad/PageLoad';

const ActorMovies = () => {
  const actorMoviesState = useSelector((state) => state.actorMovies);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { movies, actorDetail, isLoading } = actorMoviesState;

  useEffect(() => {
    dispatch(fetchActorMovies(+id));

    // reset the state when unmount
    return () => {
      dispatch(resetState());
    };
  }, []);

  return (
    <div className="main-collections">
      <div className="container">
        <div className="search-box">
          <h1 className="search-title">{`${actorDetail.name}'s Movies`}</h1>
        </div>

        {/* Show Spinner when fetching */}
        {isLoading && <PageLoad />}

        {movies && <CollectMovies moviesArray={movies} />}
      </div>
    </div>
  );
};

export default ActorMovies;
