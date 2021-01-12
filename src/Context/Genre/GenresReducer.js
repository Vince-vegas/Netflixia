/* eslint-disable import/no-anonymous-default-export */
export const initialState = {
  movieSorted: 'popular',
  currentPage: 1,
  movies: [],
  movieCollected: [],
  isLoading: false,
  totalPaginate: [],
};

export default (draft, action) => {
  switch (action.type) {
    case 'set-currentPage': {
      draft.currentPage = action.currentPage;
      return;
    }
    case 'fetch-movies': {
      draft.movies = action.data;
      draft.isLoading = false;
      draft.currentPage = 1;
      draft.totalPaginate = action.totalPaginate;
      return;
    }
    case 'collected-movies': {
      draft.movieCollected = action.payload;
      return;
    }
    case 'sort-movies': {
      draft.movieSorted = action.sortTyped;
      return;
    }
    case 'isloading': {
      draft.isLoading = true;
      return;
    }

    case 'empty-state': {
      draft.movieSorted = 'popular';
      draft.movies = [];
      draft.movieCollected = [];
      draft.isLoading = false;
      draft.totalPaginate = [];
      draft.currentPage = 1;
      return;
    }

    default:
      return draft;
  }
};
