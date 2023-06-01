import { ATT_CART, CATEGORIES_LIST } from '../actions/server';

const initialState = {
  categoriesList: [],
  firstTime: true,
  cartItens: [],
  quantity: 0,
};

const server = (state = initialState, action) => {
  switch (action.type) {
  case CATEGORIES_LIST:
    return {
      ...state,
      categoriesList: action.categoriesList,
      firstTime: false,
    };
  case ATT_CART: {
    const itens = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const total = itens.reduce((acc, curr) => acc + curr.quantity, 0);
    return {
      ...state,
      quantity: total,
      cartItens: itens,
    };
  }
  default:
    return state;
  }
};

export default server;
