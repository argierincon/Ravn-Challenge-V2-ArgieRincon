import React from 'react';
import ItemDrawer from '../ItemDrawer/ItemDrawer';
import LoadingDrawer from '../LoadingDrawer/LoadingDrawer';
import FailedLoadDrawer from '../../components/FailedLoadDrawer/FailedLoadDrawer';
import './Drawer.sass';

const Drawer = () => {
  return (
    <div className="drawer">
      <ItemDrawer
        name={'Luke Skywalker'}
        species={'Human'}
        homeworld={'Tatooine'}
      />
      <ItemDrawer name={'C-3PO'} species={'Droid'} homeworld={'Tatooine'} />
      <ItemDrawer name={'R2-D2'} species={'Droid'} homeworld={'Naboo'} />
      <ItemDrawer
        name={'Darth Vader'}
        species={'Human'}
        homeworld={'Tatooine'}
      />
      <ItemDrawer
        name={'Leia Organa'}
        species={'Human'}
        homeworld={'Alderaan'}
      />
      <LoadingDrawer />
      <FailedLoadDrawer />
    </div>
  );
};

export default Drawer;
