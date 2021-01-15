import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieSorted: 'popular',
  currentPage: 1,
  movies: [],
  movieCollected: [],
  isLoading: false,
  totalPaginate: [],
};

const genreSlice = createSlice({
  name: 'genre',
  initialState: initialState,
  reducers: {
    test: (state, action) => {
      state.movies = action.data;
      state.currentPage = 1;
      state.totalPaginate = action.totalPaginate;
      state.isLoading = false;
    },
  },
});
