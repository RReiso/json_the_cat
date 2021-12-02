import request from "request";

const searchURL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  request(`${searchURL}${breedName}`, (error, response) => {
    let descriptions = {};
    if (!error){
      const cats = JSON.parse(response.body);
      for (let cat of cats) {
        descriptions[cat.name] = cat.description
      }
    }
    callback(error, descriptions);
  });
};

export { fetchBreedDescription };
