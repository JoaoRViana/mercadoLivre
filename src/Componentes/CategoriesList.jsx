/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchCategories } from '../Service';
import { loading, userSearch } from '../redux/actions/search';

class CategoriesList extends Component {
  handleClick = async ({ target }) => {
    const { name } = target;
    const { dispatch } = this.props;
    dispatch(loading());
    const data = await getSearchCategories(name);
    dispatch(userSearch(data));
  };

  render() {
    const { server } = this.props;
    return (
      <div className="categorieList bg-gray-300 w-72 text-center">
        Categorias
        <ul>
          {server.categoriesList.map((e, i) => (
            <li
              key={ `${e.name} ${i}` }
              className="text-center py-1 bg-gray-300 w-72"
            >
              <button
                onClick={ this.handleClick }
                name={ e.id }
              >
                {e.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
  server: state.server,
});

export default connect(mapStateToProps)(CategoriesList);
