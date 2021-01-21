import React, { createContext, useReducer } from 'react';

const ActorsContext = createContext();

const initialState = {
  isLoading: false,
  actors: [],
  page: 1,
};

const actionReducer = (state, action) => {
  switch (action.type) {
    case 'START_FETCH': {
      return { ...state, isLoading: true };
    }
    case 'ACTORS_FETCHED': {
      return { ...state, actors: action.payload.actors, isLoading: false };
    }

    case 'CLEAR_TOP_ACTORS': {
      return { ...state, actors: [], page: 1, isLoading: false };
    }

    default:
      return state;
  }
};

const ActorsProvider = (props) => {
  const [state, dispatch] = useReducer(actionReducer, initialState);
  const { isLoading, actors, page } = state;

  const fetchTopActors = async (pageNumber) => {
    const actors = await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=${pageNumber}`
    );

    const data = await actors.json();
    console.log(data);
    dispatch({ type: 'ACTORS_FETCHED', payload: { actors: data.results } });
    return data;
  };

  return (
    <ActorsContext.Provider
      value={{ isLoading, actors, page, dispatch, fetchTopActors }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export { ActorsContext };
export default ActorsProvider;
