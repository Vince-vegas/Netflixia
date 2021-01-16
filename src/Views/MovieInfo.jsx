/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../Store/MovieInfo/movieInfoReducer';

const MovieInfo = () => {
  const { id } = useParams();
  const movieDetailState = useSelector((state) => state.movieDetails);
  const { movieDetail } = movieDetailState;
  const dispatch = useDispatch();

  useEffect(() => {
    //
    dispatch(fetchMovieDetails({ id: parseInt(id) }));
  }, []);

  return (
    <div>
      <h1>Movie Info</h1>
    </div>
  );
};

export default MovieInfo;
