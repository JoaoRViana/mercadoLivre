/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className=" w-full flex flex-wrap justify-center items-center text-center">
        <h2
          className={ `${theme} w-44 tex-center text-xl p-2 rounded-xl` }
        >
          Carregando...
        </h2>

      </div>
    );
  }
}
