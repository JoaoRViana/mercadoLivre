import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Componentes/Header';

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  server: state.server,
});
export default connect(mapStateToProps)(ProductDetail);
