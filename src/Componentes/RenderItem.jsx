/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemLocalStorage } from '../Service';
import { attCart } from '../redux/actions/server';

class RenderItem extends Component {
  addProduct = () => {
    const { item, dispatch } = this.props;
    addItemLocalStorage(item, true);
    dispatch(attCart());
  };

  render() {
    const { item } = this.props;
    return (
      <div>
        <h2>
          {item.title}
        </h2>
        <img src={ item.thumbnail } alt={ item.title } />
        <h3>
          $
          {(+item.price).toFixed(2)}
        </h3>
        <button onClick={ this.addProduct }>Comprar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  server: state.server,
});

export default connect(mapStateToProps)(RenderItem);
