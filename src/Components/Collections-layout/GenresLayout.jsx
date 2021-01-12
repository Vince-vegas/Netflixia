/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import TrendList from './TrendList';
import PageLoad from '../ShowLoad/PageLoad';
import { GenresContext } from '../../Context/Genre/GenresState';
import CollectMovies from '../Collect-Movie/CollectMovies';
import PagePagination from '../Pagination/PagePagination';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import '../../Styles/genres-layout.scss';

const GenresLayout = (props) => {
  const genresContext = useContext(GenresContext);
  const {
    requestHot,
    requestTopRated,
    requestNowPlaying,
    totalPaginate,
    onChangePage,
    currentPage,
    movieSorted,
    isLoading,
    movieCollected,
    dispatch,
    requestData,
    requestHomeData,
  } = genresContext;

  /*
  The first useEffect hook will check if the router is
  /home or /genre/:id

  It uses the if Statement to optimize the functionality on
  GenresContext and This Component

  1.
    If a user browse to genres 
    request:
    - requestData(id)
    - request movie Genre

  2.
    If a user don't browse to genres 
    request: 
    - requestHomeData()
    - the default data movies

  */

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    if (props.match.path !== '/home') {
      // 1. requestData(id);
      const { id } = props.match.params;
      requestData(parseInt(id), source.token);
    } else {
      // 2. requestHomeData()
      requestHomeData(source.token);
    }

    return () => {
      source.cancel('Operation canceled by the user');
    };
  }, [movieSorted, props.match.params.id]);

  /*
    This useEffect will clean up the data of GenresContext when unmounting || rerender the component
  */
  useEffect(() => {
    return () => {
      dispatch({ type: 'empty-state' });
    };
  }, [props.match.params.id]);

  return (
    <div className="main-collections">
      <div className="container">
        <div className="collection-opt mb40">
          {movieCollected && (
            <ul className="collection-menu">
              <TrendList
                value="Hot"
                handleClick={requestHot}
                sortValue="popular"
                sortPage={movieSorted}
              />
              <TrendList
                value="Top Rated"
                handleClick={requestTopRated}
                sortValue="top_rated"
                sortPage={movieSorted}
              />
              <TrendList
                value="Now Playing"
                handleClick={requestNowPlaying}
                sortValue="now_playing"
                sortPage={movieSorted}
              />
            </ul>
          )}
        </div>

        {/* Show spinner when fetching data is not completed */}
        {isLoading && <PageLoad />}

        <CollectMovies moviesArray={movieCollected} />
      </div>
      <PagePagination
        totalPagination={totalPaginate}
        currentPage={currentPage}
        handleClick={onChangePage}
      />
    </div>
  );
};

export default withRouter(GenresLayout);
