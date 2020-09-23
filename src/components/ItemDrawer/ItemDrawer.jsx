import React from 'react';
import './ItemDrawer.sass';

const ItemDrawer = ({ name, species, homeworld }) => {
  return (
    <div className="item-drawer">
      <div className="item-drawer__data-people">
        <h2 className="characters-name-drawer h2 h2-default-color">{name}</h2>
        <p className="character-species-drawer p1 p1-low-emphasis-color">
          {species} from {homeworld}
        </p>
      </div>
      <div className="item-drawer__arrow">
        <span>&rsaquo;</span>
      </div>
    </div>
  );
};

export default ItemDrawer;
