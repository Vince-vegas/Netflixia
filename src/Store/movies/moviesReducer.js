import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk(
  'movies/FETCH_MOVIES',
  async (moviesObj) => {
    try {
      const getMovies = await fetch(
        `https://api.themoviedb.org/3/movie/${moviesObj.sorted}?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=${moviesObj.pageId}`
      );
      const data = await getMovies.json();

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
    page: 1,
    totalPage: 10,
    error: {},
  },
  reducers: {
    SORTBY_POPULAR: (state) => {
      state.sorted = 'popular';
      state.isLoading = true;
    },
    SORTBY_RATED: (state) => {
      state.sorted = 'top_rated';
      state.isLoading = true;
    },
    SORTBY_LATEST: (state) => {
      state.sorted = 'now_playing';
      state.isLoading = true;
    },
    SET_PAGE: (state, action) => {
      state.page = action.payload.currentPage;
    },
    resetState: (state) => {
      state.isLoading = false;
      state.sorted = 'popular';
      state.movies = [];
      state.page = 1;
      state.error = {};
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
      state.page = action.meta.arg.pageId;
    },
  },
});

const {
  SORTBY_POPULAR,
  SORTBY_RATED,
  SORTBY_LATEST,
  resetState,
} = moviesSlice.actions;

const onSortPopular = () => ({ type: SORTBY_POPULAR.type });
const onSortRated = () => ({ type: SORTBY_RATED.type });
const onSortLatest = () => ({ type: SORTBY_LATEST.type });

// reset the state
const onResetState = () => resetState();

export { onSortPopular, onSortRated, onSortLatest, onResetState };
export default moviesSlice.reducer;
