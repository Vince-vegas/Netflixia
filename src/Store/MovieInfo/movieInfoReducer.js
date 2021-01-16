import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchMovieDetails = createAsyncThunk(
  'movie/FETCH_DETAILS',
  async (detail, thunkAPI) => {
    try {
      const fetchDetail = await fetch(
        `https://api.themoviedb.org/3/movie/${detail.id}?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US`
      );
      const detailData = await fetchDetail();

      return { details: detailData };
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
    movieGenres: [],
    movieDetail: {},
    movieActors: [],
    trailerKey: '',
    isPlayTrailer: false,
    movieSuggested: [],
    isSuggestLoad: false,
    noSuggested: false,
  },
  extraReducers: {
    [fetchMovieDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovieDetails.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [fetchMovieDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movieDetail = action.payload.details;
    },
  },
});

export { fetchMovieDetails };
export default movieSlice.reducer;
