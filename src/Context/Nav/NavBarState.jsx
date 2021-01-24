/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect } from 'react';
import { useImmerReducer } from 'use-immer';
import axios from 'axios';
import navAction, { initialState } from './NavAction';
import { withRouter } from 'react-router-dom';

export const NavContext = createContext();

const NavProvider = (props) => {
  const [state, dispatch] = useImmerReducer(navAction, initialState);
  const { genres, searchInput } = state;

  // 1.

  // When user search for a movie go to router /search-query/:title
  const onSubmitSearch = (e) => {
    e.preventDefault();
    const title = searchInput.trim();

    if (title.length > 0) {
      props.history.push(`/search-query/${title}`);
      dispatch({ type: 'clear-searchInput' });
      window.scrollTo(0, 0);
      // for mobile search input
      // to remove mobile search input
      e.target.parentElement.classList.remove('show-search');
      return;
    }
  };

  // 2.

  // Handle Navigation Search
  // When search is empty don't execute the function
  // when Search is empty prevent default the Space bar || keyCode 32
  const onSearchInput = (e) => {
    const { value } = e.target;
    if (value.length <= 0 && (e.which === 32 || e.keyCode === 32)) {
      e.preventDefault();
    }

    dispatch({ type: 'handle-Input', value: value });
  };

  // NAV OPTS GENRE
  // when this function run or render fetch Genres items from TMBDB for navigation bar opts list
  useEffect(() => {
    const requestOpts = async () => {
      const res = await axios(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US`
      ).then((data) => {
        return data.data;
      });
      dispatch({ type: 'add-genre-options', genres: res.genres });
      return res;
    };

    requestOpts();
  }, []);

  return (
    <NavContext.Provider
      value={{
        genres,
        searchInput,
        onSearchInput,
        onSubmitSearch,
      }}
    >
      {props.children}
    </NavContext.Provider>
  );
};

export default withRouter(NavProvider);
