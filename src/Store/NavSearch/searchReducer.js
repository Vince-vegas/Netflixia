import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search-movie',
  initialState: {
    searchedValue: '',
  },
});

export default searchSlice.reducer;
