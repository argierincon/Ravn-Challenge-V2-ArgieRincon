import { gql, useQuery } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import React from 'react';
import Title from '../Title/Title';
import ItemInformation from '../ItemInformation/ItemInformation';
import Loading from '../Loading/Loading';
import './GeneralCharacterInformation.sass';

export const queryCharacterInfo = gql`
  query queryCharacterInfo($idPerson: ID) {
    person(id: $idPerson) {
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection {
        vehicles {
          name
        }
      }
    }
  }
`;

const GeneralCharacterInformation = (props) => {
  let { id } = props.match.params;
  id = id ? id : 'cGVvcGxlOjE=';
  const { data, loading, error } = useQuery(queryCharacterInfo, {
    fetchPolicy: 'network-only',
    variables: { idPerson: id },
  });
  // console.log(data);
  // console.log(loading);
  // console.log(error);
  if (loading) return <Loading />;

  const {
    eyeColor,
    hairColor,
    skinColor,
    birthYear,
    vehicleConnection,
  } = data.person;
  return (
    <section className="general-character-information">
      <Title title={'General Information'} />
      <ItemInformation itemInfo="Eye Color" itemDetail={eyeColor} />
      <ItemInformation itemInfo="Hair Color" itemDetail={hairColor} />
      <ItemInformation itemInfo="Skin Color" itemDetail={skinColor} />
      <ItemInformation itemInfo="Birth Year" itemDetail={birthYear} />
      {vehicleConnection.vehicles.length > 0 && <Title title={'Vehicles'} />}
      {vehicleConnection.vehicles.map((ele) => (
        <ItemInformation key={ele.name} itemInfo={ele.name} />
      ))}
    </section>
  );
};

export default withRouter(GeneralCharacterInformation);
