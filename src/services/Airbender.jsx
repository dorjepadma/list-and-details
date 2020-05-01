//handles Airbender API call
export const getCharacters = () => {
  return fetch('http://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json());
};
export const getDetail = CharacterId => {
  return fetch(`http://last-airbender-api.herokuapp.com/api/v1/characters${CharacterId}`)
    .then(res => res.json())
    .then(json => ({
      name: json.name,
      allies: json.allies,
      enemies: json.enemies,
      weapon: json.weapon,
      position: json.position,
      affiliation: json.affiliation,
      image: json.image,
    }));
};
