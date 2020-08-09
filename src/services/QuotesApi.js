const ENDPOINT = 'http://loremricksum.com/api/?paragraphs=1&quotes=2';

const getQuotes = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getQuotes;
