import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchHomeMovies = createAsyncThunk(
  'movies/FETCH_MOVIES',
  async (moviesObj, thunkAPI) => {
    try {
      const getMovies = await fetch(
        `https://api.themoviedb.org/3/movie/${moviesObj.sorted}?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=${moviesObj.page}`,
        { signal: thunkAPI.signal }
      );
      const data = await getMovies.json();

      return data;
    } catch (error) {
      throw Error('404 test');
    }
  }
);

export const fetchGenreMovies = createAsyncThunk(
  'movies/FETCH_GENRE_MOVIES',
  async (moviesObj, thunkAPI) => {
    try {
      const getMovies = await fetch(
        `https://api.themoviedb.org/3/movie/${moviesObj.sorted}?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=${moviesObj.pageId}&with_genres=${moviesObj.genreId}`,
        { signal: thunkAPI.signal }
      );
      const data = await getMovies.json();

      return {
        movies: data,
        genreId: moviesObj.genreId,
      };
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
    genreId: 28,
    totalPage: 5,
    error: {},
  },
  reducers: {
    SORTBY_POPULAR: (state) => {
      state.sorted = 'popular';
      state.page = 1;
    },
    SORTBY_RATED: (state) => {
      state.sorted = 'top_rated';
      state.page = 1;
    },
    SORTBY_LATEST: (state) => {
      state.sorted = 'now_playing';
      state.page = 1;
    },
    SET_PAGE: (state, action) => {
      state.page = action.payload.page;
    },
    SET_GENRE: (state, action) => {
      state.genreId = action.payload.id;
    },
    resetState: (state) => {
      state.isLoading = false;
      state.sorted = 'popular';
      state.movies = [];
      state.page = 1;
      state.genreId = 28;
      state.error = {};
    },
  },
  extraReducers: {
    [fetchHomeMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchHomeMovies.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [fetchHomeMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.results;
      // state.page = action.payload.page;
    },
    [fetchGenreMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchGenreMovies.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [fetchGenreMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.movies.results;
      state.page = action.payload.movies.page;
      state.genreId = action.payload.genreId;
    },
  },
});

const {
  SORTBY_POPULAR,
  SORTBY_RATED,
  SORTBY_LATEST,
  SET_PAGE,
  SET_GENRE,
  resetState,
} = moviesSlice.actions;

const onSortPopular = () => ({ type: SORTBY_POPULAR.type });
const onSortRated = () => ({ type: SORTBY_RATED.type });
const onSortLatest = () => ({ type: SORTBY_LATEST.type });

const onSetPage = (page) => SET_PAGE({ page });
const onSetGenre = (id) => SET_GENRE({ id });

// reset the state
const onResetState = () => resetState();

export {
  onSortPopular,
  onSortRated,
  onSortLatest,
  onResetState,
  onSetPage,
  onSetGenre,
};
export default moviesSlice.reducer;
