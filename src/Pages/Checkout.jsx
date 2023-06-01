import React, { Component } from 'react';
import Header from '../Componentes/Header';
import FullCart from '../Componentes/FullCart';

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <Header />
        <FullCart />
      </div>
    );
  }
}
