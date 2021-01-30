/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import '../Styles/genres-layout.scss';

import { useSelector, useDispatch } from 'react-redux';

import {
  fetchHomeMovies,
  onSortPopular,
  onSortRated,
  onSortLatest,
  onResetState,
  onSetPage,
} from '../Store/movies/moviesReducer';
import SortLayout from '../Components/Layout/SortLayout';
import TrendList from '../Components/Collections-layout/TrendList';
import CollectMovies from '../Components/Collect-Movie/CollectMovies';
import PageLoad from '../Components/ShowLoad/PageLoad';
import PagePagination from '../Components/Pagination/PagePagination';

const HomeMovies = () => {
  const moviesContext = useSelector((state) => state.moviesState);
  const dispatch = useDispatch();

  const { sorted, page, movies, isLoading, totalPage } = moviesContext;

  useEffect(() => {
    // console.log(moviesContext);
    // the * to conver string into Number
    dispatch(fetchHomeMovies({ sorted, page }));
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

  const handleSetPage = (id) => {
    window.scrollTo(0, 0);
    dispatch(onSetPage(id));
  };

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

          <PagePagination
            totalPagination={totalPage}
            currentPage={page}
            handleClick={handleSetPage}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMovies;
