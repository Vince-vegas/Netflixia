import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchMovieDetails = createAsyncThunk(
  'movie/FETCH_DETAILS',
  async (detailObj) => {
    try {
      // Movie Details
      const fetchDetail = await fetch(
        `https://api.themoviedb.org/3/movie/${detailObj.id}?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US`
      );
      const detailData = await fetchDetail.json();

      // Youtube Trailer Key
      const fetchTrailerKey = await fetch(`https://api.themoviedb.org/3/movie/${detailObj.id}/videos?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US
    `);
      const trailerKey = await fetchTrailerKey.json();

      // People at Movie
      const fetchPeople = await fetch(`https://api.themoviedb.org/3/movie/${detailObj.id}/credits?api_key=${process.env.REACT_APP_TMDB_ID}
    `);
      const movieActors = await fetchPeople.json();

      return {
        details: detailData,
        trailerKey: trailerKey.results[0].key,
        movieActors: movieActors.cast,
        movieId: detailObj.id,
      };
    } catch (error) {
      throw new Error('404', error);
    }
  }
);

const fetchSuggested = createAsyncThunk(
  'movies/FETCH_SUGGESTED',
  async (detailsObj) => {
    try {
      const movies = await fetch(
        `https://api.themoviedb.org/3/movie/${detailsObj.id}/similar?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&page=1`
      );
      const data = await movies.json();

      // total items is 20
      // I slice the array for 12 items
      // only 12 items for great user experience
      return data.results.slice(0, 12);
    } catch (error) {
      throw new Error(error);
    }
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movieId: '',
    isDetailsLoad: false,
    movieDetail: {},
    movieActors: [],
    trailerKey: '',
    isPlayTrailer: false,
    moviesSuggested: [],
    isSuggestLoad: false,
    noSuggested: false,
    error: {},
  },
  reducers: {
    resetState: (state) => {
      state.movieId = '';
      state.isDetailsLoad = false;
      state.movieDetail = {};
      state.movieActors = [];
      state.trailerKey = '';
      state.isPlayTrailer = false;
      state.moviesSuggested = [];
      state.isSuggestLoad = false;
      state.noSuggested = false;
      state.error = {};
    },
  },
  extraReducers: {
    [fetchMovieDetails.pending]: (state) => {
      state.isDetailsLoad = true;
    },
    [fetchMovieDetails.rejected]: (state, action) => {
      state.isDetailsLoad = false;
      state.error = action.error;
    },
    [fetchMovieDetails.fulfilled]: (state, action) => {
      state.isDetailsLoad = false;
      state.movieId = action.payload.movieId;
      state.movieDetail = action.payload.details;
      state.trailerKey = action.payload.trailerKey;
      state.movieActors = action.payload.movieActors;
    },
    [fetchSuggested.pending]: (state) => {
      state.isSuggestLoad = true;
    },
    [fetchSuggested.rejected]: (state) => {
      state.isSuggestLoad = false;
      state.noSuggested = true;
    },
    [fetchSuggested.fulfilled]: (state, action) => {
      state.isSuggestLoad = false;
      state.moviesSuggested = action.payload;
    },
  },
});

export const { resetState } = movieSlice.actions;

export { fetchMovieDetails, fetchSuggested };
export default movieSlice.reducer;
