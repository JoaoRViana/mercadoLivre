/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSearch, itemNotFound } from '../Service';
import { loading, userSearch } from '../redux/actions/search';

const { useState } = require('react');

function InputSearch() {
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

  return (
    <div>
      <input
        placeholder="Buscar produtos, marcas e muito mais..."
        className="bg-gray-200 w-96 text-center text-black rounded-md"
        onChange={ handleChange }
        value={ inputs.inputSearch }
      />
      <button
        onClick={ handleClick }
        className="px-1 bg-slate-950 mx-2 rounded-md"
      >
        Buscar
      </button>
    </div>
  );
}

export default InputSearch;
