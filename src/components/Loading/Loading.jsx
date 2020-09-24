import React from 'react';
import './Loading.sass';
import LoadingGif from '../../assets/img/loading.gif';

const LoadingDrawer = () => {
  return (
    <div className="loading">
      <img src={LoadingGif} alt="loading" />
      <h2 className="h2 h2-low-emphasis-color">Loading</h2>
    </div>
  );
};

export default LoadingDrawer;
