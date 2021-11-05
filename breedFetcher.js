const request = require('request');

let breed = process.argv[2];


fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    const info = data[0];
    // console.log(info.description)
    if (info) {
      callback(null, info.description);
    } else {
      callback('Could not find breed description!');
    }
  }
  );
};

module.exports = { fetchBreedDescription };