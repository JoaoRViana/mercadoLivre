/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSearch, itemNotFound } from '../Service';
import { loading, userSearch } from '../redux/actions/search';

const { useState } = require('react');

function InputSearch(props) {
  const { theme } = props;
  const [inputs, setValues] = useState({
    inputSearch: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { value } = target;
    setValues({
      ...inputs,
      inputSearch: value,
    });
  };

  const handleClick = async () => {
    dispatch(loading());
    const data = await getSearch(inputs.inputSearch);
    if (data.length === 0) {
      dispatch(userSearch([itemNotFound]));
    } else {
      dispatch(userSearch(data));
    }
    navigate('/');
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };
  return (
    <div>
      <input
        placeholder="Buscar produtos..."
        className={ `${theme.inputSearch} mx-2` }
        onChange={ handleChange }
        value={ inputs.inputSearch }
        onKeyPress={ handleKeyPress }
      />
      <button
        className={ `${theme.buttonSearch} px-1 rounded-md` }
        onClick={ handleClick }
      >
        Buscar
      </button>
    </div>
  );
}

export default InputSearch;
