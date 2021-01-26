import { createSlice } from '@reduxjs/toolkit';

const navHandlerSlice = createSlice({
  name: 'nav-dom-handler',
  initialState: {
    genres: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 16, name: 'Animation' },
      { id: 35, name: 'Comedy' },
      { id: 80, name: 'Crime' },
      { id: 99, name: 'Documentary' },
      { id: 18, name: 'Drama' },
      { id: 10751, name: 'Family' },
      { id: 14, name: 'Fantasy' },
      { id: 36, name: 'History' },
      { id: 27, name: 'Horror' },
      { id: 10402, name: 'Music' },
      { id: 9648, name: 'Mystery' },
      { id: 10749, name: 'Romance' },
      { id: 878, name: 'Science Fiction' },
      { id: 10770, name: 'TV Movie' },
      { id: 53, name: 'Thriller' },
      { id: 10752, name: 'War' },
      { id: 37, name: 'Western' },
    ],
    showMobileSearch: false,
    showGenres: false,
  },
  reducers: {
    toggleMobileSearch: (state) => {
      state.showMobileSearch = !state.showMobileSearch;
      state.showGenres = false;
    },
    toggleShowGenres: (state) => {
      state.showGenres = !state.showGenres;
      state.showMobileSearch = false;
    },

    resetNavHandler: (state) => {
      state.showMobileSearch = false;
      state.showGenres = false;
    },
  },
});

export const {
  toggleMobileSearch,
  toggleShowGenres,
  resetNavHandler,
} = navHandlerSlice.actions;

export default navHandlerSlice.reducer;
