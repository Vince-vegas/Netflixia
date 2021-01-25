/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorMovies } from '../Store/ActorMovies/actorMoviesReducer';
import CollectMovies from '../Components/Collect-Movie/CollectMovies';
import { useSelector, useDispatch } from 'react-redux';

const ActorMovies = () => {
  const actorMoviesState = useSelector((state) => state.actorMovies);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { movies, actorDetail, slicedMovies } = actorMoviesState;

  useEffect(() => {
    dispatch(fetchActorMovies(+id));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <div className="main-collections">
        <div className="container">
          {actorDetail && (
            <div className="search-box">
              <h1 className="search-title">{`${actorDetail.name}'s Movies`}</h1>
            </div>
          )}

          {movies && <CollectMovies moviesArray={movies} />}
        </div>
      </div>
    </div>
  );
};

export default ActorMovies;
