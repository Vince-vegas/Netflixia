export const initialState = {
  isLoading: false,
  topActorsCollect: [],
  topActors: [],
  currentPaginate: 1,
  totalPaginate: [],
};

const topActorAction = (draft, action) => {
  switch (action.type) {
    case 'start-to-load': {
      draft.isLoading = true;
      return;
    }

    case 'fetch-top-actors': {
      draft.topActors = action.actors;
      draft.isLoading = false;
      draft.totalPaginate = action.totalPaginate;
      return;
    }

    case 'collect-top-actors': {
      draft.topActorsCollect = action.payload;
      return;
    }

    case 'set-pagination': {
      draft.currentPaginate = action.currentPaginate;
      return;
    }

    case 'clear-top-actors': {
      draft.topActors = [];
      draft.topActorsCollect = [];
      draft.currentPaginate = 1;
      draft.isLoading = false;
      draft.totalPaginate = [];
      return;
    }

    default: {
      return draft;
    }
  }
};

export default topActorAction;
