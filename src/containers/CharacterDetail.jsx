//This page handels state and rendering of Avatar Character details
import React, { useState, useEffect } from 'react';
import CharacterDetail from '../components/CharacterDetail';
import PropTypes from 'prop-types';
import { fetchCharacter } from '../services/Airbender';

const CharacterDetails = (match) => {

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetchCharacter(match.params.id)
      .then(character => setCharacter(character));

  }, []);

  if(!character) return <h1>Patience!</h1>;
  return <CharacterDetail name={character.name}
    allies={character.allies}
    enemies={character.enemies}
    weapon={character.weapon}
    position={character.position}
    affiliation={character.affiliation}
    image={character.image} />;
};
CharacterDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};    

export default CharacterDetails;


