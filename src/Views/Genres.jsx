/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../Store/movies/movies';

const Genres = () => {
  const { pageIdParams } = useParams();
  const moviesContext = useSelector((state) => state.moviesState);
  const dispatch = useDispatch();

  const { sorted, pageId } = moviesContext;

  useEffect(() => {
    console.log(moviesContext);
  }, [sorted, pageId]);

  useEffect(() => {
    dispatch(fetchMovies({ sorted: 'popular', pageId: pageIdParams }));
  }, []);

  return (
    <div>
      <h1>Genres</h1>
      <button>Latest</button>
      <button>Top Rated</button>
      <button>Now Playing</button>
    </div>
  );
};

export default Genres;
