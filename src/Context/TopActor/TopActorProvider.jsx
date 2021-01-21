/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect } from 'react';
import axios from 'axios';
import { useImmerReducer } from 'use-immer';
import topActorAction, { initialState } from './TopActorAction';
import { onTotalPaginate } from '../../Services/HelperAlgo/totalPaginate';
import { sliceBy20 } from '../../Services/HelperAlgo/sliceMovies';
import { scrollTopFunc } from '../../Services/Basic-Funtion/Functions';

export const TopActorContext = createContext();

/*
  Top Actors Provider
*/

const topActorsUrl = (page) =>
  `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=${page}`;

const TopActorProvider = (props) => {
  const [state, dispatch] = useImmerReducer(topActorAction, initialState);
  const {
    isLoading,
    topActorsCollect,
    currentPaginate,
    totalPaginate,
    topActors,
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

  // Search Top Actors
  // total of 100
  const getTopActors = async (cancelReq) => {
    dispatch({ type: 'start-to-load' });
    scrollTopFunc();

    const actors = await axios
      .all([
        axios(topActorsUrl(1), { cancelToken: cancelReq }),
        axios(topActorsUrl(2), { cancelToken: cancelReq }),
        axios(topActorsUrl(3), { cancelToken: cancelReq }),
        axios(topActorsUrl(4), { cancelToken: cancelReq }),
        axios(topActorsUrl(5), { cancelToken: cancelReq }),
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

          return data;
        })
      );

    dispatch({
      type: 'fetch-top-actors',
      actors: actors,
      totalPaginate: onTotalPaginate(actors, 20),
    });
  };

  useEffect(() => {
    dispatch({
      type: 'collect-top-actors',
      payload: sliceBy20(topActors, currentPaginate),
    });
  }, [topActors, currentPaginate]);

  return (
    <TopActorContext.Provider
      value={{
        isLoading,
        topActorsCollect,
        currentPaginate,
        totalPaginate,
        dispatch,
        getTopActors,
        onChangePaginate,
      }}
    >
      {props.children}
    </TopActorContext.Provider>
  );
};

export default TopActorProvider;
