import React from 'react';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';
import GeneralCharacterInformation from '../../components/GeneralCharacterInformation/GeneralCharacterInformation';
import './Home.sass';

const Home = () => {
  return (
    <>
      <Header />
      <section className="view-home">
        <Drawer />
        <GeneralCharacterInformation />
      </section>
    </>
  );
};

export default Home;
