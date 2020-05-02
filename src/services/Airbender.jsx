//handles Airbender API call
export const fetchCharacter = () => {
  return fetch('http://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.results.map(({ characterId, name, allies, enemies, weapon, position, affilation, }) => ({
      characterId,
      name,
      description: `This character is ${name} and is ${affiliation}`,
      //to insure broken images are replaced by place holders. I had this issue with my earlier release. 
      image: image.includes('Maxresdefault.jpg') ? 'https://www.fillmurray.com/640/360' :image
    })));
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
