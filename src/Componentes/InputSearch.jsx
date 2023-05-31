/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearch, itemNotFound } from '../Service';
import { loading, userSearch } from '../redux/actions/search';

class InputSearch extends Component {
  state = {
    inputSearch: '',
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      inputSearch: value,
    });
  };

  handleClick = async () => {
    const { inputSearch } = this.state;
    const { dispatch } = this.props;
    dispatch(loading());
    const data = await getSearch(inputSearch);
    if (data.length === 0) {
      dispatch(userSearch([itemNotFound]));
    } else {
      dispatch(userSearch(data));
    }
  };

  render() {
    const { inputSearch } = this.state;
    return (
      <div>
        <input
          placeholder="Buscar produtos,marcas e muito mais..."
          className="bg-gray-200 w-96 text-center text-black
          rounded-md "
          onChange={ this.handleChange }
          value={ inputSearch }
        />
        <button
          onClick={ this.handleClick }
          className="px-1 bg-slate-950 mx-2
          rounded-md "
        >
          Buscar
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  search: state.search,
});
export default connect(mapStateToProps)(InputSearch);
