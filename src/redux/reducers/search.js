import { LOADING, USER_SEARCH } from '../actions/search';

const initialState = {
  valueSearch: [],
  loading: false,
};

const search = (state = initialState, action) => {
  switch (action.type) {
  case USER_SEARCH:
    return {
      ...state,
      valueSearch: action.valueSearch,
      loading: false,
    };
  case LOADING: {
    return {
      ...state,
      loading: true,
    };
  }
  default:
    return state;
  }
};

export default search;
