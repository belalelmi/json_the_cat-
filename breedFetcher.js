const request = require('request');
// const JSON = require

let breed = process.argv[2];

let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  try {
    const data = JSON.parse(body);
    console.log(data[0].description); //to get info of breed
  } catch (error) {
    console.error("Error: " + error);
  }
});
