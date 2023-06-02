export const CATEGORIES_LIST = 'CATEGORIES_LIST';

export const ATT_CART = 'ATT_CART';

export const CHANGE_THEME = 'CHANGE_THEME';

export const listingCategories = (categoriesList) => ({
  type: CATEGORIES_LIST,
  categoriesList,
});

export const attCart = () => ({
  type: ATT_CART,
});

export const changeTheme = (currentTheme) => ({
  type: CHANGE_THEME,
  currentTheme,
});
