import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchSearchedMovie = createAsyncThunk(
  'search-movie/FETCH_SEARCH',
  async (movieName) => {
    const getSearchMovie = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US&query=${movieName}&page=1&include_adult=false
    `);

    const searchedData = await getSearchMovie.json();

    return {
      movie: searchedData,
    };
  }
);

const searchSlice = createSlice({
  name: 'search-movie',
  initialState: {
    isLoading: false,
    searchedValue: '',
    searchedMovie: [],
  },
  reducers: {
    resetState: (state) => {
      state.isLoading = false;
      state.searchedValue = '';
      state.searchedMovie = [];
    },
    setSearchValue: (state, action) => {
      state.searchedValue = action.payload.name;
    },
  },

  extraReducers: {
    [fetchSearchedMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSearchedMovie.rejected]: (state) => {
      state.isLoading = false;
    },
    [fetchSearchedMovie.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.searchedMovie = action.payload.movie.results;
    },
  },
});

const { resetState, setSearchValue } = searchSlice.actions;

// reset the state
const onResetState = () => resetState();

// set a searched value to the state
const onSetSearch = (name) => setSearchValue({ name });

export { fetchSearchedMovie, onResetState, onSetSearch };
export default searchSlice.reducer;
