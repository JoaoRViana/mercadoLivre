/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartProducts extends Component {
  render() {
    const { server, server: { theme } } = this.props;
    console.log(server.cartItens);
    return (
      <div className={ `cartList ${server[theme].cartProducts} p-1 rounded` }>
        {server.cartItens.map((e) => (
          <div key={ `cart ${e.id}` } className="flex items-center">
            <div>
              <h3 className="text-xs my-2">{e.title}</h3>
              <h3 className="text-xs">
                Quantidade:
                {e.quantity}
              </h3>
            </div>
            <img src={ e.thumbnail } alt={ e.title } className="w-20 my-3" />

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
