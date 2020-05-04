import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Character from './Character';
import styles from './Characters.css';

const Characters = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character._id}>
      <Link to={`/${character._id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul className={styles.Characters}>
      {characterElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    photoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string
  })).isRequired
};

export default Characters;
