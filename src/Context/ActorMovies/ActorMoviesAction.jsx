export const initialState = {
  isLoading: false,
  movieCollected: [],
  actorMovies: [],
  actorDetail: {},
  totalPaginate: [],
  currentPaginate: 1,
};

const actorsMoviesAction = (draft, action) => {
  switch (action.type) {
    case 'start-to-load': {
      draft.isLoading = true;
      return;
    }

    // Fetching Actor's Movies & Detail
    case 'fetch-actor-movies': {
      draft.actorMovies = action.movies;
      draft.actorDetail = action.detail;
      draft.totalPaginate = action.totalPaginate;
      draft.isLoading = false;
      return;
    }

    // collect actor's movies when user click a name on MovieInfo Component
    // Also connected to MovieInfo Component
    case 'collect-actor-movies': {
      draft.movieCollected = action.payload;
      return;
    }

    // set pagination || current pagination number
    case 'set-pagination': {
      draft.currentPaginate = action.currentPaginate;
      return;
    }

    // empty the actorDetails & actor movies
    case 'empty-actor-movies': {
      draft.isLoading = false;
      draft.actorDetail = {};
      draft.actorMovies = [];
      draft.totalPaginate = [];
      draft.currentPaginate = 1;
      draft.movieCollected = [];
      return;
    }

    default: {
      return draft;
    }
  }
};

export default actorsMoviesAction;
