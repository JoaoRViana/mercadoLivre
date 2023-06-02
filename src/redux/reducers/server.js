import { ATT_CART, CATEGORIES_LIST, CHANGE_THEME } from '../actions/server';

const initialState = {
  categoriesList: [],
  cartItens: [],
  quantity: 0,
  total: 0,
  theme: 'light',
  light: {
    inputSearch: 'bg-gray-200 w-96 text-center text-black rounded-md',
  },
  dark: {
    inputSearch: 'bg-black-200 w-96 text-center text-white rounded-md',
  },
};

const server = (state = initialState, action) => {
  switch (action.type) {
  case CATEGORIES_LIST:
    return {
      ...state,
      categoriesList: action.categoriesList,
    };
  case ATT_CART: {
    const itens = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const total = itens.reduce((acc, curr) => acc + curr.quantity, 0);
    const sum = itens.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    return {
      ...state,
      quantity: total,
      cartItens: itens,
      total: sum,
    };
  }
  case CHANGE_THEME: {
    const theme = action.currentTheme === 'light' ? 'dark' : 'light';
    return {
      ...state,
      theme,
    };
  }
  default:
    return state;
  }
};

export default server;
