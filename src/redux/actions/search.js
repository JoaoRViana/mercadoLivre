export const USER_SEARCH = 'USER_SEARCH';

export const LOADING = 'LOADING';

export const userSearch = (valueSearch) => ({
  type: USER_SEARCH,
  valueSearch,
});

export const loading = () => ({
  type: LOADING,
});
