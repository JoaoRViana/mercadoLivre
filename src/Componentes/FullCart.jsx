/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemLocalStorage, removeItemLocalStorage } from '../Service';
import { attCart } from '../redux/actions/server';

class FullCart extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(attCart());
  }

  render() {
    const { server } = this.props;
    return (
      <div>
        {server.cartItens.map((e) => (
          <div key={ e.id }>
            <h1>{e.title}</h1>
            <img src={ e.thumbnail } alt={ e.title } />
            <h3>{(+e.price).toFixed(2)}</h3>
            <h4>{e.quantity}</h4>
            <button
              onClick={ () => {
                const { dispatch } = this.props;
                addItemLocalStorage(e, false);
                dispatch(attCart());
              } }
            >
              +
            </button>
            <button
              onClick={ () => {
                const { dispatch } = this.props;
                removeItemLocalStorage(e);
                dispatch(attCart());
              } }
            >
              -
            </button>
          </div>
        ))}
        <h2>
          Total
          {' '}
          {(+server.total).toFixed(2)}
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  server: state.server,
});

export default connect(mapStateToProps)(FullCart);
