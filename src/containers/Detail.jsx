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
      {details.map (details => 
        <div key={details.id} className="detailsContainer">
          <img className="detailsImage" 
            src={details.photoUrl}
            style={{ width: 250, height: 250, borderRadius: 250 / 2 }} 
            alt={details.name}
          />           
          <h2 className="detailsAllies">{details.allies}</h2>
          <h2 className="detailsEnemies">{details.enemies}</h2>
          <h2 className="detailsWeapon">{details.weapon}</h2>
          <h2 className="detailsPosition">{details.position}</h2>
          <h2 className="detailsAffiliation">{details.affiliation}</h2>
        </div>
      )
      }
    </>
  );
};
export default DetailsList;

