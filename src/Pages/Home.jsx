/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Componentes/Header';
import ListItens from '../Componentes/ListItens';
import Loading from '../Componentes/Loading';
import CategoriesList from '../Componentes/CategoriesList';

class Home extends Component {
  render() {
    const { search, server, server: { theme } } = this.props;
    return (
      <div>
        <Header />
        <CategoriesList />
        {search.loading ? <Loading theme={ server[theme].cards } /> : <ListItens />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
  server: state.server,
});

export default connect(mapStateToProps)(Home);
