const axios = require("axios");

const geocode = async (address) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=03b61e6e457c45709ee113142240407&q=" +
    address;

  try {
    const weatherData = await axios.get(url);
    const body = weatherData.data;
    return body;
  } catch (error) {
    console.log("Unable to find location. Please try again!!...");
  }
};
// geocode("surat").then((res)=>console.log(res))
console.log(geocode("rajkot").then((res) => res));

module.exports = geocode;
