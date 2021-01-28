import React, { useEffect } from 'react';
import '../Styles/genres-layout.scss';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  fetchHomeMovies,
  onSortPopular,
  onSortRated,
  onSortLatest,
  onResetState,
} from '../Store/movies/moviesReducer';
import SortLayout from '../Components/Layout/SortLayout';
import TrendList from '../Components/Collections-layout/TrendList';
import CollectMovies from '../Components/Collect-Movie/CollectMovies';

const HomeMovies = () => {
  const { pageId } = useParams();
  const moviesContext = useSelector((state) => state.moviesState);
  const dispatch = useDispatch();

  const { sorted, page, movies } = moviesContext;

  useEffect(() => {
    // console.log(moviesContext);
    // the * to conver string into Number
    dispatch(fetchHomeMovies({ sorted, pageId: parseInt(pageId) }));
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
          <CollectMovies moviesArray={movies} />
        </div>
      </div>
    </div>
  );
};

export default HomeMovies;
