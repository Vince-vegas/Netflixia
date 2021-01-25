import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search-movie',
  initialState: {
    searchedValue: '',
    searchedMovies: [],
  },
  reducers: {
    onSearchedValue: (state, action) => {
      state.searchedValue = action.payload.value;
    },
  },
});

export default searchSlice.reducer;
