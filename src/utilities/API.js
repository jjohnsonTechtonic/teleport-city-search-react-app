const getResultsBySearchTerm = (searchTerm) => {
  return fetch(`https://api.teleport.org/api/cities/?search=${searchTerm}`);
};

const getCityDetailsByLink = (link) => {
  return fetch(link);
};

const getImageByCity = (cityName) => {
  return fetch(
    `https://api.teleport.org/api/urban_areas/slug:${cityName
      .toLowerCase()
      .replace(" ", "-")}/images/`
  );
};

const getScoresByCity = (cityName) => {
  return fetch(
    `https://api.teleport.org/api/urban_areas/slug:${cityName
      .toLowerCase()
      .replace(" ", "-")}/scores/`
  );
};

export {
  getResultsBySearchTerm,
  getCityDetailsByLink,
  getImageByCity,
  getScoresByCity,
};
