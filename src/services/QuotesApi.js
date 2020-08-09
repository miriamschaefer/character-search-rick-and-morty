const ENDPOINTQUOTES = 'http://loremricksum.com/api/?paragraphs=1&quotes=3';

const getQuotes = () => {
  return fetch(ENDPOINTQUOTES)
    .then((response) => response.json())
    .then((quote) => {
      return quote;
    });
};

export default getQuotes;
