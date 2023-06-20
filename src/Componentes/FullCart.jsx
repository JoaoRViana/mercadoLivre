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
    const { server, server: { theme } } = this.props;
    return (
      <div
        className="flex flex-wrap
      justify-center items-center"
      >
        {server.cartItens.map((e) => (
          <div
            key={ e.id }
            className={ `${server[theme].cards} w-1/2 m-3  
            flex flex-wrap justify-center text-center h-48 p-2` }
          >
            <h1 className="w-full">{e.title}</h1>
            <img src={ e.thumbnail } alt={ e.title } className="w-32 m-3" />
            <div className="m-3">
              <h3 className="w-full">
                R$
                {(+e.price).toFixed(2)}
              </h3>
              <div className="w-full">
                {' '}
                <button
                  className={ `${server[theme].buttonSearch} m-3 rounded p-1` }
                  onClick={ () => {
                    const { dispatch } = this.props;
                    addItemLocalStorage(e, false);
                    dispatch(attCart());
                  } }
                >
                  Adicionar
                </button>
                <button
                  className={ `${server[theme].buttonSearch} m-3 rounded p-1` }
                  onClick={ () => {
                    const { dispatch } = this.props;
                    removeItemLocalStorage(e);
                    dispatch(attCart());
                  } }
                >
                  Remover
                </button>
                {' '}

              </div>

              <h4>
                Quantidade :
                {` ${e.quantity}`}
              </h4>
            </div>

          </div>
        ))}
        <div className="w-1/2 text-center flex justify-center ">
          <h2 className={ `text-xl rounded-xl p-2 ${server[theme].cards} mb-3` }>
            Total
            {' '}
            R$
            {(+server.total).toFixed(2)}
          </h2>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  server: state.server,
});

export default connect(mapStateToProps)(FullCart);
