//This page handels state and rendering of Avatar Character details
import React, { useState, useEffect } from 'react';
import { getDetail } from '../services/AirbenderDetails';

const DetailsList = () => {

  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetail()
      .then(newDetails => setDetails(newDetails));

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
export default DetailsList;
