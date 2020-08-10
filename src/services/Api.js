const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const getInfo = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

export default getInfo;
