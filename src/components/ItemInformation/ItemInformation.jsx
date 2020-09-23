import React from 'react';
import './ItemInformation.sass';

const ItemInformation = ({ itemInfo, itemDetail }) => {
  return (
    <div className="item-information">
      <h2 className="h2 h2-low-emphasis-color">{itemInfo}</h2>
      <h2 className="align-end h2 h2-default-color">{itemDetail}</h2>
    </div>
  );
};

export default ItemInformation;
