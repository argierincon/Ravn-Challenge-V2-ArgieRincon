import React from 'react';
import ItemDrawer from '../ItemDrawer/ItemDrawer';
import LoadingDrawer from '../LoadingDrawer/LoadingDrawer';
import FailedLoadDrawer from '../../components/FailedLoadDrawer/FailedLoadDrawer';
import './Drawer.sass';

const Drawer = () => {
  return (
    <div className="drawer">
      <ItemDrawer></ItemDrawer>
      <ItemDrawer></ItemDrawer>
      <ItemDrawer></ItemDrawer>
      <ItemDrawer></ItemDrawer>
      <ItemDrawer></ItemDrawer>
      <LoadingDrawer />
      <FailedLoadDrawer />
    </div>
  );
};

export default Drawer;
