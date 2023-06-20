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
    const { item, server, server: { theme } } = this.props;
    return (
      <div
        className={ `${server[theme].cards} 
      m-3 w-1/2 h-96 flex flex-wrap justify-center text-center` }
      >
        <h2 className="m-3 w-full">
          {item.title}
        </h2>
        <img
          src={ item.thumbnail }
          alt={ item.title }
          className="w-44 m-3 self-center justify-self-center"
        />
        <h3 className="m-3 w-full">
          $
          {(+item.price).toFixed(2)}
        </h3>
        <button
          onClick={ this.addProduct }
          className={ `${server[theme].buttonSearch} rounded m-3 p-2` }
        >
          Comprar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  server: state.server,
});

export default connect(mapStateToProps)(RenderItem);
