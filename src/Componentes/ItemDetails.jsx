/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getSpecificItem } from '../Service';
import RenderItem from './RenderItem';

class ItemDetails extends Component {
  state = {
    item: {},
  };

  componentDidMount() {
    this.getItem();
  }

  getItem = async () => {
    const location = window.location.href;
    const index = location.indexOf('MLB');
    const id = location.slice(index);
    const details = await getSpecificItem(id);
    this.setState({
      item: details,
    });
  };

  render() {
    const { item } = this.state;
    return (
      <div>
        {item
          ? <RenderItem item={ item } />
          : ''}
      </div>
    );
  }
}

export default ItemDetails;
