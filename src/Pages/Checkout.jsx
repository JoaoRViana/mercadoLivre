/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Componentes/Header';
import FullCart from '../Componentes/FullCart';

class Checkout extends Component {
  render() {
    return (
      <div>
        <Header />
        <FullCart />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  server: state.server,
});

export default connect(mapStateToProps)(Checkout);
