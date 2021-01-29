import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchTopActors = createAsyncThunk('actors/FETCH_ACTORS', async (page) => {
  const getActors = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=${page}`
  );

  const actorsData = await getActors.json();

  return actorsData;
});

const actorSlice = createSlice({
  name: 'actors',
  initialState: {
    isLoading: false,
    actors: [],
    page: 1,
    totalPage: 5,
    error: {},
  },
  extraReducers: {
    [fetchTopActors.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTopActors.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export default actorSlice.reducer;
