import React from 'react';
import Title from '../Title/Title';
import ItemInformation from '../ItemInformation/ItemInformation';
import './GeneralCharacterInformation.sass';

const GeneralCharacterInformation = () => {
  return (
    <section className="general-character-information">
      <Title title={'General Information'} />
      <ItemInformation itemInfo={'Eye Color'} itemDetail={'Blue'} />
      <ItemInformation itemInfo={'Hair Color'} itemDetail={'Blond'} />
      <ItemInformation itemInfo={'Skin Color'} itemDetail={'Fair'} />
      <ItemInformation itemInfo={'Birth Year'} itemDetail={'19BBY'} />
      <Title title={'Vehicles'} />
      <ItemInformation itemInfo={'Snowspeeder'} />
      <ItemInformation itemInfo={'Imperial Speeder Bike'} />
    </section>
  );
};

export default GeneralCharacterInformation;
