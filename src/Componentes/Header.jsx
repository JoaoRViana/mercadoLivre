/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories, getSearchCategories } from '../Service';
import InputSearch from './InputSearch';
import { listingCategories } from '../redux/actions/server';
import { loading, userSearch } from '../redux/actions/search';

class Header extends Component {
  componentDidMount() {
    this.AllCategories();
  }

  AllCategories = async () => {
    const { dispatch, search } = this.props;
    const categories = await getCategories();
    if (search.valueSearch.length < 1) {
      await this.randomSearch();
    }
    dispatch(listingCategories(categories));
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

  render() {
    const { server } = this.props;
    return (
      <div>
        <div
          className="bg-slate-600 text-green-300 flex-wrap
        justify-around flex h-20 items-center"
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
          <InputSearch />
          <Link to="/checkout">
            {server.quantity}
          </Link>
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
