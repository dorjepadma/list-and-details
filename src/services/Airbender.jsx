//handles Airbender API call
export const fetchCharacters = () => {
  return fetch('http://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    // .then(json => json.results.map(({ _id, name, photoUrl }) => ({
    //   _id,
    //   name,
    //   photoUrl: photoUrl.includes('Maxresdefault.jpg') ? 'https://www.fillmurray.com/640/360' : photoUrl
    // })));
};

export const getDetail = _id => {
  return fetch(`http://last-airbender-api.herokuapp.com/api/v1/characters/${_id}`)
    .then(res => res.json())
    .then(json => ({
      name: json.name,
      allies: json.allies,
      enemies: json.enemies,
      weapon: json.weapon,
      position: json.position,
      affiliation: json.affiliation,
      photoUrl: json.photoUrl,
    }));
};
