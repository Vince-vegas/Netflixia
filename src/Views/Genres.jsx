/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import '../Styles/genres-layout.scss';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  onSortPopular,
  onSortRated,
  onSortLatest,
  onResetState,
  fetchGenreMovies,
} from '../Store/movies/moviesReducer';
import SortLayout from '../Components/Layout/SortLayout';
import TrendList from '../Components/Collections-layout/TrendList';
import CollectMovies from '../Components/Collect-Movie/CollectMovies';
import PageLoad from '../Components/ShowLoad/PageLoad';

const Genres = () => {
  const { id } = useParams();
  const moviesContext = useSelector((state) => state.moviesState);
  const dispatch = useDispatch();

  const { sorted, page, movies, genreId, isLoading } = moviesContext;

  useEffect(() => {
    // the +id to conver string into Number
    dispatch(
      fetchGenreMovies({
        sorted,
        genreId: +id,
        pageId: page,
      })
    );
  }, [sorted, page, genreId]);

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

  // reset the state when unmount
  useEffect(() => {
    return () => {
      dispatch(onResetState());
    };
  }, []);

  return (
    <div>
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

          {/* Show Spinner when fetching */}
          {isLoading && <PageLoad />}

          <CollectMovies moviesArray={movies} />
        </div>
      </div>
    </div>
  );
};

export default Genres;
