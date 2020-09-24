import React from 'react';
import { withRouter } from 'react-router-dom';
import './ItemDrawer.sass';

const ItemDrawer = (props) => {
  const { name, species, homeworld, idPerson } = props;
  let { id } = props.match.params;
  id = id ? id : 'cGVvcGxlOjE=';
  return (
    <div className={id === idPerson ? 'item-drawer active' : 'item-drawer'}>
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

export default withRouter(ItemDrawer);
