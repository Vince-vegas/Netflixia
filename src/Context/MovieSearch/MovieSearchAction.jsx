export const initialState = {
  searchResults: [],
  isLoading: false,
};

const searchAction = (draft, action) => {
  switch (action.type) {
    case 'searching-movie': {
      draft.isLoading = true;
      return;
    }

    case 'search-completed': {
      draft.isLoading = false;
      draft.searchResults = action.payload;
      return;
    }

    case 'empty-search-results': {
      draft.isLoading = false;
      draft.searchResults = [];
      return;
    }

    default: {
      return draft;
    }
  }
};

export default searchAction;
