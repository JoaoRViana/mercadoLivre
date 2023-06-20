/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories, getSearchCategories } from '../Service';
import InputSearch from './InputSearch';
import { changeTheme, listingCategories } from '../redux/actions/server';
import { loading, userSearch } from '../redux/actions/search';
import CartProducts from './CartProducts';

class Header extends Component {
  componentDidMount() {
    this.AllCategories();
  }

  AllCategories = async () => {
    const { dispatch, search } = this.props;
    const categories = await getCategories();
    await dispatch(listingCategories(categories));
    if (search.valueSearch.length < 1) {
      await this.randomSearch();
    }
  };

  randomSearch = async () => {
    const { dispatch, server: { categoriesList } } = this.props;
    if (categoriesList.length > 1) {
      const randomNumber = Math.round(Math.random() * (categoriesList.length - 1) * 1);
      const { id } = categoriesList[randomNumber];
      dispatch(loading());
      const data = await getSearchCategories(id);
      dispatch(userSearch(data));
    }
  };

  changeMode = () => {
    const { dispatch, server } = this.props;
    const currentTheme = server.theme;
    dispatch(changeTheme(currentTheme));
  };

  render() {
    const { server, server: { theme } } = this.props;
    const empty = server.cartItens.length === 0 ? 'emptyCart' : '';
    return (
      <div>
        <div
          className={ `${server[theme].header} flex-wrap
        justify-around flex h-20 items-center` }
        >
          <Link to="/">
            <button
              onClick={ async () => {
                await this.randomSearch();
              } }
            >
              Mercado Livre
            </button>
          </Link>
          <InputSearch theme={ server[server.theme] } />
          <Link to="/checkout">
            <div
              className={ `${server[theme].cartProducts}
            cartInfos  rounded-lg bg-slate-400 w-8 text-center ${empty}` }
            >
              {server.quantity}
              <CartProducts />
            </div>
          </Link>
          <button
            onClick={ this.changeMode }
          >
            <h1>{server.theme === 'light' ? '🌙' : '☀️'}</h1>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  server: state.server,
  search: state.search,
});

export default connect(mapStateToProps)(Header);
