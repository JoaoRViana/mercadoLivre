// api

// categorias https://api.mercadolibre.com/sites/MLB/categories;
// busca por termo https://api.mercadolibre.com/sites/MLB/search?q=$QUERY;
// busca por categoria e termo https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID;
//  https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY;
//  https://api.mercadolibre.com/items/$PRODUCT_ID
// documentação https://developers.mercadolivre.com.br/pt_br/itens-e-buscas

const getCategories = async () => {
  const api = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await api.json(api);
  return data;
};

const getSearch = async (inputSearch) => {
  const api = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inputSearch}`);
  const data = await api.json(api);
  return data.results;
};

const getSearchCategories = async (category) => {
  const api = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}`);
  const data = await api.json(api);
  return data.results;
};

const getSpecificItem = async (itemID) => {
  const api = await fetch(`https://api.mercadolibre.com/items/${itemID}`);
  const data = await api.json(api);
  return data.results;
};

const itemNotFound = {
  title: 'Item não encontrado',
  thumbnail: '../41ce1856-ce64-47eb-9cc9-d50c75ba936b.avif',
  price: '???',
};

module.exports = {
  getCategories,
  getSearch,
  getSpecificItem,
  getSearchCategories,
  itemNotFound,
};
