export const CATEGORIES_LIST = 'CATEGORIES_LIST';

export const ATT_CART = 'ATT_CART';

export const listingCategories = (categoriesList) => ({
  type: CATEGORIES_LIST,
  categoriesList,
});

export const attCart = () => ({
  type: ATT_CART,
});
