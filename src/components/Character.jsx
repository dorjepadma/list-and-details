import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ photoUrl, name, description }) => (
  <section className={styles.Character}>
    <img src={photoUrl} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
  </section>
);

Character.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Character;
