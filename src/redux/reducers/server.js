import { CATEGORIES_LIST } from '../actions/server';

const initialState = {
  categoriesList: [],
};

const server = (state = initialState, action) => {
  switch (action.type) {
  case CATEGORIES_LIST:
    return {
      ...state,
      categoriesList: action.categoriesList,
    };
  default:
    return state;
  }
};

export default server;
