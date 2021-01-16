export const initialState = {
  movieId: 0,
  movieGenres: [],
  movieDetail: {},
  movieActors: [],
  movieSuggested: [],
  collectedSuggest: [],
  isSuggestLoad: false,
  noSuggested: false,
  trailerKey: '',
  isPlayTrailer: false,
};

export default (draft, action) => {
  switch (action.type) {
    case 'set-movie-id': {
      draft.movieId = action.id;
      return;
    }
    case 'set-details': {
      draft.movieDetail = action.details;
      draft.movieGenres = action.genres;
      draft.trailerKey = action.trailerKey;
      return;
    }

    case 'set-movie-cast': {
      draft.movieActors = action.cast;
      return;
    }

    case 'set-movie-suggested': {
      draft.movieSuggested = action.suggested;
      draft.isSuggestLoad = false;
      return;
    }

    case 'empty-movie-detail': {
      draft.movieDetail = {};
      draft.movieGenres = [];
      draft.movieActors = [];
      draft.movieSuggested = [];
      draft.movieId = 0;
      draft.isSuggestLoad = false;
      draft.trailerKey = {};
      draft.noSuggested = false;
      draft.isPlayTrailer = false;
      return;
    }

    case 'watch-trailer': {
      draft.isPlayTrailer = action.playTrailer;
      return;
    }

    case 'start-suggest-load': {
      draft.isSuggestLoad = true;
      return;
    }

    case 'no-suggested-movie': {
      draft.noSuggested = true;
      draft.isSuggestLoad = false;
      return;
    }

    default:
      return draft;
  }
};
