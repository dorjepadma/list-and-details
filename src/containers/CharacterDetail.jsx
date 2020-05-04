//This page handels state and rendering of Avatar Character details
import React, { useState, useEffect } from 'react';
import CharacterDetail from '../components/CharacterDetail';
import PropTypes from 'prop-types';
import { getDetail } from '../services/Airbender';

const CharacterDetails = ({ match }) => {

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getDetail(match.params._id)
      .then(character => setCharacter(character));

  }, []);

  if(!character) return <h1>Patience!</h1>;

  return <CharacterDetail 
    name={character.name}
    allies={character.allies}
    enemies={character.enemies}
    weapon={character.weapon}
    position={character.position}
    photoUrl={character.photoUrl} />;
};
CharacterDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      _id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};    

export default CharacterDetails;


