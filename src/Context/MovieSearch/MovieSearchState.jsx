/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import axios from 'axios';
import searchAction, { initialState } from './MovieSearchAction';

/* 
  1. Movie Search Provider
  2. The User's searches results State
  3. fetch search value
*/

export const MovieSearchContext = createContext();

const MovieSearchProvider = (props) => {
  const [state, dispatch] = useImmerReducer(searchAction, initialState);
  const { searchResults, isLoading } = state;

  /* 
   Search movie data from:
   1. The given query string || props.match.params
   2. /search-query/:id <===
  */
  const getSearchMovie = (movieName, cancelReq) => {
    dispatch({ type: 'searching-movie' });

    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&query=${movieName}&page=1&include_adult=false
    `,
      { cancelToken: cancelReq }
    )
      .then((res) => res.data)
      .then((data) => {
        dispatch({ type: 'search-completed', payload: data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MovieSearchContext.Provider
      value={{
        searchResults,
        isLoading,
        dispatch,
        getSearchMovie,
      }}
    >
      {props.children}
    </MovieSearchContext.Provider>
  );
};

export default MovieSearchProvider;
