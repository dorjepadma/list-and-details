//This page handels state and rendering of Avatar Character details
import React, { useState, useEffect } from 'react';
import { getDetail } from '../services/AirbenderDetails';
import PropTypes from 'prop-types';
import { Airbender } from '../../services/AirbenderDetails';
import {Link} from "react-trouter-dom";

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
          <h2 className="detailsAllies"> Allies: {details.allies}</h2>
          <h2 className="detailsEnemies">Enemies: {details.enemies}</h2>
          <h2 className="detailsWeapon">Weapon: {details.weapon}</h2>
          <h2 className="detailsPosition">Position: {details.position}</h2>
          <h2 className="detailsAffiliation">Affiliations: {details.affiliation}</h2>
        </div>
      )
      }
    </>
  );
};
export default DetailsList;


