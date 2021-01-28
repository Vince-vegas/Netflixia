import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// `https://api.themoviedb.org/3/movie/${sort}?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=${page}&with_genres=${genreId}`

export const fetchHomeMovies = createAsyncThunk(
  'movies/FETCH_MOVIES',
  async (moviesObj) => {
    try {
      const getMovies = await fetch(
        `https://api.themoviedb.org/3/movie/${moviesObj.sorted}?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=${moviesObj.pageId}`
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
  async (moviesObj) => {
    console.log(moviesObj);
    try {
      const getMovies = await fetch(
        `https://api.themoviedb.org/3/movie/${moviesObj.sorted}?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=${moviesObj.pageId}&with_genres=${moviesObj.genreId}`
      );
      const data = await getMovies.json();

      console.log(data);

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
      state.page = action.payload.page;
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
  resetState,
} = moviesSlice.actions;

const onSortPopular = () => ({ type: SORTBY_POPULAR.type });
const onSortRated = () => ({ type: SORTBY_RATED.type });
const onSortLatest = () => ({ type: SORTBY_LATEST.type });

// reset the state
const onResetState = () => resetState();

export { onSortPopular, onSortRated, onSortLatest, onResetState };
export default moviesSlice.reducer;
