import React from 'react';
import PropType from 'prop-types';

const CharacterDetail = ({ name, allies, enemies, weapon, position, photoUrl }) => (
  <>
    <h1>{name}</h1>
    <img src={photoUrl} />
    <p>{allies}</p>
    <p>{enemies}</p>
    <p>{weapon}</p>
    <p>{position}</p>
  </>
);
CharacterDetail.propTypes = {
  name: PropType.string.isRequired,
  photoUrl: PropType.string.isRequired,
  allies: PropType.string.isRequired,
  enemies: PropType.string.isRequired,
  weapon: PropType.string.isRequired,
  position: PropType.string.isRequired,
};
export default CharacterDetail;
