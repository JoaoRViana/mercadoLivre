import { ATT_CART, CATEGORIES_LIST, CHANGE_THEME } from '../actions/server';

const initialState = {
  categoriesList: [],
  cartItens: [],
  quantity: 0,
  total: 0,
  theme: 'light',
  light: {
    background: 'bg-white',
    inputSearch: 'bg-gray-200 w-96 text-center text-black rounded-md',
    cards: 'bg-lime-100 text-slate-800',
    header: 'bg-lime-100 text-slate-800',
    buttonSearch: 'bg-white text-black',
    cartProducts: 'bg-stone-200',
  },
  dark: {
    background: 'bg-zinc-900',
    inputSearch: 'bg-zinc-950 w-96 text-center text-white rounded-md ',
    cards: 'bg-lime-950 text-amber-50',
    header: 'bg-lime-950 text-amber-50',
    buttonSearch: 'bg-black text-amber-50',
    cartProducts: 'bg-stone-700',
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
    const body = document.querySelector('body');
    body.className = initialState[theme].background;
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
