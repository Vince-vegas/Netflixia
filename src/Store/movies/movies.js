import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk(
  'movies/FETCH_MOVIES',
  async (moviesObj, thunkAPI) => {
    try {
      const onFetchMovies = await fetch(
        `https://api.themoviedb.org/3/movie/${moviesObj.sorted}?api_key=4282b08304ac2b491b7051fecc6c26d0&language=en-US&page=${moviesObj.pageId}`
      );
      const data = await onFetchMovies.json();

      return data.results;
    } catch (error) {
      throw Error('404 test');
    }
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    isLoading: false,
    sorted: 'popular',
    page: '1',
    totalPage: 10,
    error: '',
  },
  reducers: {
    SORTED_POPULAR: (state) => {
      state.sorted = 'popular';
    },
    SORTED_RATED: (state) => {
      state.sorted = 'top_rated';
    },
    SORT_BY_LATEST: (state) => {
      state.sorted = 'now_playing';
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
      state.sorted = 'popular';
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.sorted = action.meta.arg.sorted;
      state.movies = action.payload;
      state.page = action.meta.arg.pageId;
    },
  },
});

export default moviesSlice.reducer;
