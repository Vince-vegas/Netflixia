/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect } from 'react';
import axios from 'axios';
import { useImmerReducer } from 'use-immer';
import actorsMoviesAction, { initialState } from './ActorMoviesAction';
import { scrollTopFunc } from '../../Services/Basic-Funtion/Functions';
import { sliceBy24 } from '../../Services/HelperAlgo/sliceMovies';
import { onTotalPaginate } from '../../Services/HelperAlgo/totalPaginate';

export const ActorMoviesContext = createContext();

/* 
  ActorMoviesProvider || The State
  Their Movies
  Route = /actor/movies/:actorsId
*/

const ActorMoviesProvider = (props) => {
  const [state, dispatch] = useImmerReducer(actorsMoviesAction, initialState);
  const {
    isLoading,
    movieCollected,
    actorDetail,
    totalPaginate,
    currentPaginate,
    actorMovies,
  } = state;

  // When Pagination item got clicked
  // Change Current Paginate integer
  const onChangePaginate = (e) => {
    dispatch({
      type: 'set-pagination',
      currentPaginate: parseInt(e.target.innerText),
    });

    scrollTopFunc();
  };

  // fetch Actors Movies
  // fetch actor Detail
  const getActorsMovie = async (id, cancelReq) => {
    dispatch({ type: 'start-to-load' });
    scrollTopFunc();

    try {
      const actorMovies = await axios(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US`,
        { cancelToken: cancelReq }
      );
      const resData = await actorMovies.data;
      const data = resData.cast;

      const actorDetail = await axios(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US`,
        { cancelToken: cancelReq }
      );
      const detailData = await actorDetail.data;

      dispatch({
        type: 'fetch-actor-movies',
        movies: data,
        detail: detailData,
        totalPaginate: onTotalPaginate(data),
      });
    } catch (error) {
      console.log(error.message, error);
    }
  };

  // Collect Actors Movie
  // Slice Movies by 24 from:
  // actorMovies: [...item, ...item] to movieCollected: [...item, ...item]
  // useEffect will run when one of actorDetail and currentPaginate gonna run

  useEffect(() => {
    dispatch({
      type: 'collect-actor-movies',
      payload: sliceBy24(actorMovies, currentPaginate),
    });
  }, [actorDetail, currentPaginate]);

  return (
    <ActorMoviesContext.Provider
      value={{
        isLoading,
        movieCollected,
        actorDetail,
        totalPaginate,
        currentPaginate,
        dispatch,
        onChangePaginate,
        getActorsMovie,
      }}
    >
      {props.children}
    </ActorMoviesContext.Provider>
  );
};

export default ActorMoviesProvider;
