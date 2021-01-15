/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  fetchMovies,
  onSortPopular,
  onSortRated,
  onSortLatest,
} from '../Store/movies/movies';

const Genres = () => {
  const { pageId } = useParams();
  const moviesContext = useSelector((state) => state.moviesState);
  const dispatch = useDispatch();

  const { sorted, page, movies } = moviesContext;

  useEffect(() => {
    console.log(moviesContext);
    // the * to conver string into Number
    dispatch(fetchMovies({ sorted, pageId: pageId * 1 }));
  }, [sorted, page]);

  return (
    <div>
      <Link to="/loadable">Loadable</Link>
      <h1>Genres</h1>
      <button onClick={() => dispatch(onSortPopular())}>Most Viewed</button>
      <button onClick={() => dispatch(onSortRated())}>Top Rated</button>
      <button onClick={() => dispatch(onSortLatest())}>Now Playing</button>

      <hr />
      {movies.map((item) => {
        return <h4 key={item.id}>{item.title}</h4>;
      })}
    </div>
  );
};

export default Genres;
