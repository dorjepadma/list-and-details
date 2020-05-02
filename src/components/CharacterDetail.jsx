import React from 'react';
import PropType from 'prop-types';

const CharacterDetail = ({ name, allies, enemies, weapon, position, affiliation, image }) => (
  <>
    <h1>{name}</h1>
    <img src={image} />
    <p>{allies}</p>
    <p>{enemies}</p>
    <p>{weapon}</p>
    <p>{position}</p>
    <p>{affiliation}</p>
  </>
);
CharacterDetail.propTypes = {
  name: PropType.string.isRequired,
  image: PropType.string.isRequired,
  allies: PropType.string.isRequired,
  enemies: PropType.string.isRequired,
  weapon: PropType.string.isRequired,
  position: PropType.string.isRequired,
  affiliation: PropType.string.isRequired
};
export default CharacterDetail;
