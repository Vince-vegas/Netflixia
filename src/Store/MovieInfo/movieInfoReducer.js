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
      };
    } catch (error) {
      throw new Error('404', error);
    }
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movieId: 0,
    isLoading: false,
    movieDetail: {},
    movieActors: [],
    trailerKey: '',
    isPlayTrailer: false,
    movieSuggested: [],
    isSuggestLoad: false,
    noSuggested: false,
    error: {},
  },
  extraReducers: {
    [fetchMovieDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovieDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [fetchMovieDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movieDetail = action.payload.details;
      state.trailerKey = action.payload.trailerKey;
      state.movieActors = action.payload.movieActors;
    },
  },
});

export { fetchMovieDetails };
export default movieSlice.reducer;
