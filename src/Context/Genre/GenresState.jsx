/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect } from 'react';
import { useImmerReducer } from 'use-immer';
import axios from 'axios';
import actionState, { initialState } from './GenresReducer';
import { sliceBy24 } from '../../Utils/HelperAlgo/sliceMovies';
import { onTotalPaginate } from '../../Utils/HelperAlgo/totalPaginate';
import { scrollTopFunc } from '../../Utils/Basic-Funtion/Functions';

export const GenresContext = createContext();

const genreUrl = (sort, page, genreId) =>
  `https://api.themoviedb.org/3/movie/${sort}?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=${page}&with_genres=${genreId}`;

const discoverUrl = (sort, page) =>
  `https://api.themoviedb.org/3/movie/${sort}?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=${page}`;

const GenresState = (props) => {
  const [state, dispatch] = useImmerReducer(actionState, initialState);

  const {
    currentPage,
    movies,
    movieCollected,
    movieSorted,
    isLoading,
    totalPaginate,
  } = state;

  const onChangePage = (e) => {
    dispatch({
      type: 'set-currentPage',
      currentPage: parseInt(e.target.innerText),
    });

    // when the function run Scroll To Top
    scrollTopFunc();
  };

  // Request Genre Movie Data
  const requestData = (genreId, cancelReq) => {
    dispatch({ type: 'isloading' });
    scrollTopFunc();

    axios
      .all([
        axios(genreUrl(movieSorted, 1, genreId), { cancelToken: cancelReq }),
        axios(genreUrl(movieSorted, 2, genreId), { cancelToken: cancelReq }),
        axios(genreUrl(movieSorted, 3, genreId), { cancelToken: cancelReq }),
        axios(genreUrl(movieSorted, 4, genreId), { cancelToken: cancelReq }),
        axios(genreUrl(movieSorted, 5, genreId), { cancelToken: cancelReq }),
      ])
      .then(
        axios.spread((one, two, three, four, five) => {
          const data = [
            ...one.data.results,
            ...two.data.results,
            ...three.data.results,
            ...four.data.results,
            ...five.data.results,
          ];

          dispatch({
            type: 'fetch-movies',
            data,
            totalPaginate: onTotalPaginate(data),
          });
        })
      );
  };

  // Request Home Movie Data
  const requestHomeData = (cancelReq) => {
    dispatch({ type: 'isloading' });
    scrollTopFunc();

    axios
      .all([
        axios(discoverUrl(movieSorted, 1), { cancelToken: cancelReq }),
        axios(discoverUrl(movieSorted, 2), { cancelToken: cancelReq }),
        axios(discoverUrl(movieSorted, 3), { cancelToken: cancelReq }),
        axios(discoverUrl(movieSorted, 4), { cancelToken: cancelReq }),
        axios(discoverUrl(movieSorted, 5), { cancelToken: cancelReq }),
      ])
      .then(
        axios.spread((one, two, three, four, five) => {
          const data = [
            ...one.data.results,
            ...two.data.results,
            ...three.data.results,
            ...four.data.results,
            ...five.data.results,
          ];

          dispatch({
            type: 'fetch-movies',
            data,
            totalPaginate: onTotalPaginate(data),
          });
        })
      );
  };

  // movieSorted by:
  const requestHot = () => {
    dispatch({ type: 'sort-movies', sortTyped: 'popular' });
  };

  const requestTopRated = () => {
    dispatch({ type: 'sort-movies', sortTyped: 'top_rated' });
  };

  const requestNowPlaying = () => {
    dispatch({ type: 'sort-movies', sortTyped: 'now_playing' });
  };

  // ================================
  useEffect(() => {
    dispatch({
      type: 'collected-movies',
      payload: sliceBy24(movies, currentPage),
    });
  }, [movies, currentPage]);

  return (
    <GenresContext.Provider
      value={{
        currentPage,
        movies,
        movieCollected,
        movieSorted,
        isLoading,
        totalPaginate,
        dispatch,
        onChangePage,
        requestData,
        requestHot,
        requestTopRated,
        requestNowPlaying,
        requestHomeData,
      }}
    >
      {props.children}
    </GenresContext.Provider>
  );
};

export default GenresState;
