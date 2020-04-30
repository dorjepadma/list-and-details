//This page handles state management and rendering of Avatar Character List
import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/Airbender';

const CharacterList = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(newCharacters => setCharacters(newCharacters));

  }, []);

  return (
    <>
      {characters.map (character => 
        <div key={character.id} className="characterContainer">
          <img className="characterImage" 
            src={character.photoUrl}
            style={{ width: 250, height: 250, borderRadius: 250 / 2 }} 
            alt={character.name}
          />           
          <h2 className="characterName">{character.name}</h2>
        </div>
      )
      }
    </>
  );
};
export default CharacterList;
