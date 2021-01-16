/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import '../Styles/genres-layout.scss';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  fetchMovies,
  onSortPopular,
  onSortRated,
  onSortLatest,
} from '../Store/movies/movies';
import SortLayout from '../Components/Layout/SortLayout';
import TrendList from '../Components/Collections-layout/TrendList';
import CollectMovies from '../Components/Collect-Movie/CollectMovies';

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

  // Sorting functions
  const sortToPopular = () => {
    dispatch(onSortPopular());
  };
  const sortToRated = () => {
    dispatch(onSortRated());
  };
  const sortToLatest = () => {
    dispatch(onSortLatest());
  };
  // ====================

  return (
    <div>
      <h1>Genres</h1>
      <hr />
      <div className="main-collections">
        <div className="container">
          <SortLayout>
            <TrendList
              text="Hot"
              handleEvent={sortToPopular}
              sortValue="popular"
              currentSort={sorted}
            />
            <TrendList
              text="Top Rated"
              handleEvent={sortToRated}
              sortValue="top_rated"
              currentSort={sorted}
            />
            <TrendList
              text="Now Playing"
              handleEvent={sortToLatest}
              sortValue="now_playing"
              currentSort={sorted}
            />
          </SortLayout>
          <CollectMovies moviesArray={movies} />
        </div>
      </div>
    </div>
  );
};

export default Genres;
