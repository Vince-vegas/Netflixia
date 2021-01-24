export const initialState = {
  genres: [],
  searchInput: '',
};

const navAction = (draft, action) => {
  switch (action.type) {
    case 'add-genre-options': {
      draft.genres = action.genres;
      return;
    }

    // when user type on nav search input
    case 'handle-Input': {
      draft.searchInput = action.value;
      return;
    }

    // empty the searchResult
    case 'clear-searchInput': {
      draft.searchInput = '';
      return;
    }

    default: {
      return draft;
    }
  }
};

export default navAction;
