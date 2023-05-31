/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories } from '../Service';
import InputSearch from './InputSearch';
import { listingCategories } from '../redux/actions/server';

class Header extends Component {
  componentDidMount() {
    this.AllCategories();
  }

  AllCategories = async () => {
    const { dispatch } = this.props;
    const categories = await getCategories();
    dispatch(listingCategories(categories));
  };

  render() {
    return (
      <div>
        <div
          className="bg-slate-600 text-green-300 flex-wrap
        justify-around flex h-20 items-center"
        >
          <Link to="/">
            <h2>
              Mercado Livre
            </h2>
          </Link>
          <InputSearch />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  server: state.server,
});

export default connect(mapStateToProps)(Header);
