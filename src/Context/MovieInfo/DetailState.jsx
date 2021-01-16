/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext } from 'react';
import axios from 'axios';
import detailAction, { initialState } from './DetailReducer';
import { useImmerReducer } from 'use-immer';
import { sliceSuggested } from '../../Services/HelperAlgo/sliceMovies';
import { scrollTopFunc } from '../../Services/Basic-Funtion/Functions';

export const DetailsContext = createContext();

const DetailProvider = (props) => {
  const [state, setDetail] = useImmerReducer(detailAction, initialState);

  const {
    movieId,
    movieDetail,
    movieGenres,
    movieActors,
    movieSuggested,
    isSuggestLoad,
    noSuggested,
    trailerKey,
    isPlayTrailer,
  } = state;

  const setMovieDetail = async (id, cancelReq) => {
    setDetail({ type: 'start-suggest-load' });
    scrollTopFunc();

    // =============
    try {
      // MOVIE DETAIL
      const fetchDetail = await axios(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US`,
        { cancelToken: cancelReq }
      );
      const detailData = await fetchDetail.data;

      // =============
      // MOVIE TRAILER
      const trailer = await axios(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US
    `,
        { cancelToken: cancelReq }
      );
      const trailerData = await trailer.data;

      setDetail({
        type: 'set-details',
        details: detailData,
        genres: detailData.genres,
        trailerKey: trailerData.results[0],
      });

      // =============
      // MOVIE ACTORS
      const fetchStar = await axios(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_ID}
    `,
        { cancelToken: cancelReq }
      );
      const starData = await fetchStar.data;

      setDetail({ type: 'set-movie-cast', cast: starData.cast });
    } catch (error) {
      console.log(error, error.message);
    }

    // =============
    // =============
  };

  const onWatchTrailer = () =>
    setDetail({ type: 'watch-trailer', playTrailer: !isPlayTrailer });

  // Fetch movie suggested
  const setSuggested = async (id, cancelReq) => {
    setDetail({ type: 'start-suggest-load' });

    try {
      const res = await axios(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=1
    `,
        { cancelToken: cancelReq }
      );
      const resData = await res.data;

      if (resData.results.length > 0) {
        setDetail({
          type: 'set-movie-suggested',
          suggested: sliceSuggested(resData.results),
        });
      } else {
        setDetail({ type: 'no-suggested-movie' });
        return;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <DetailsContext.Provider
      value={{
        state,
        movieId,
        movieDetail,
        movieActors,
        movieSuggested,
        movieGenres,
        isSuggestLoad,
        setMovieDetail,
        setDetail,
        setSuggested,
        noSuggested,
        trailerKey,
        isPlayTrailer,
        onWatchTrailer,
      }}
    >
      {props.children}
    </DetailsContext.Provider>
  );
};

export default DetailProvider;
