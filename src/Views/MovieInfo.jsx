/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BackgroundImage from '../Components/Layout/MovieDetail/BackgroundImage';
import { fetchMovieDetails } from '../Store/MovieInfo/movieInfoReducer';

const MovieInfo = () => {
  const { id } = useParams();
  const movieDetailState = useSelector((state) => state.movieDetails);
  const { movieDetail, movieActors, trailerKey } = movieDetailState;
  const dispatch = useDispatch();

  useEffect(() => {
    //
    dispatch(fetchMovieDetails({ id: parseInt(id) }));
  }, []);

  return (
    <>
      <div>
        <h1>Movie Info</h1>
      </div>
      <div className="mn-item-info">
        <div className="container">
          <BackgroundImage backdrop_path={movieDetail.backdrop_path} />
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
