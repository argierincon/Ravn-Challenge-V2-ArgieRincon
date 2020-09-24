import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import React from 'react';
import ItemDrawer from '../ItemDrawer/ItemDrawer';
import LoadingDrawer from '../LoadingDrawer/LoadingDrawer';
import FailedLoadDrawer from '../../components/FailedLoadDrawer/FailedLoadDrawer';
import './Drawer.sass';

export const queryAllPeopleSW = gql`
  query queryAllPeopleSW {
    allPeople {
      people {
        id
        name
        species {
          name
        }
        homeworld {
          name
        }
      }
    }
  }
`;

const Drawer = () => {
  const { data, loading, error } = useQuery(queryAllPeopleSW, {
    fetchPolicy: 'network-only',
  });
  // console.log(data);
  // console.log(loading);
  // console.log(error);

  return (
    <div className="drawer">
      {error ? (
        <FailedLoadDrawer />
      ) : loading ? (
        <LoadingDrawer />
      ) : (
        data.allPeople.people.map((ele) => (
          <Link key={ele.id} to={`/${ele.id}`}>
            <ItemDrawer
              idPerson={ele.id}
              name={ele.name}
              species={ele.species == null ? 'Human' : ele.species.name}
              homeworld={ele.homeworld.name}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default Drawer;
