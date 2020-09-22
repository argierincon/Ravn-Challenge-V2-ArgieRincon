import React from 'react';
import Title from '../Title/Title';
import ItemInformation from '../ItemInformation/ItemInformation';
import './GeneralCharacterInformation.sass';

const GeneralCharacterInformation = () => {
  return (
    <section className="general-character-information">
      <Title />
      <ItemInformation />
      <ItemInformation />
      <ItemInformation />
      <ItemInformation />
      <Title />
      <ItemInformation />
      <ItemInformation />
    </section>
  );
};

export default GeneralCharacterInformation;
