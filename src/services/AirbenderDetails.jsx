//handles a call to the air bender details page of a specific character
export const getDetail = () => {
  return fetch(`http://last-airbender-api.herokuapp.com/api/v1/characters5cf5679a915ecad153ab68ca`)
    .then(res => res.json());
};
