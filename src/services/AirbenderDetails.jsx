//handles a call to the air bender details page of a specific character
export const getDetail = () => {
  return fetch(`http://last-airbender-api.herokuapp.com/api/v1/characters${CharacterId}`)
    .then(res => res.json());
};
