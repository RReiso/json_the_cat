import request from "request";

const searchURL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  request(`${searchURL}${breedName}`, (error, response) => {
    if (!error){
      let descriptions = {};
      const cats = JSON.parse(response.body);
      for (let cat of cats) {
        descriptions[cat.name] = cat.description
      }
      callback(null, descriptions);
    }else {
      callback(error, null);
    }
  });
};

export { fetchBreedDescription };
