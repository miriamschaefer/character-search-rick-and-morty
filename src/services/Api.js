const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const getInfo = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data.results.sort((a, b) =>
        a.name.toUpperCase().localeCompare(b.name.toLowerCase())
      );
    });
};

export default getInfo;
