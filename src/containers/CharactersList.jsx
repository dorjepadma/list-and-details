//This page handles state management and rendering of Avatar Character List
import React, { useState, useEffect } from 'react';
import { fetchCharacter } from '../services/Airbender';
import PropTypes from 'prop-types';
import CharacterDetail from '../components/CharacterDetail';


const CharacterList = ({ match }) => {

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacter(match.params.id)
      .then(character => setCharacter(character));

  }, []);

  if(!character) return <h1>Patience</h1>;

  
  return <CharacterDetail name={character.name}
    species={character.species}
    status={character.status}
    image={character.image}
    origin={character.origin} />;
};

CharacterList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterList;
