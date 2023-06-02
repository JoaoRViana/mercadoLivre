/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartProducts extends Component {
  render() {
    const { server } = this.props;
    return (
      <div className="cartList">
        {server.cartItens.map((e) => (
          <div key={ `cart ${e.id}` }>
            <h3>{e.title}</h3>
            <img src={ e.thumbnail } alt={ e.title } />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  server: state.server,
});

export default connect(mapStateToProps)(CartProducts);
