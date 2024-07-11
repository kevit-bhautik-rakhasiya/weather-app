const axios = require("axios");

const geocode = async (address) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=03b61e6e457c45709ee113142240407&q=" +
    address;

  try {
    const { data } = await axios.get(url);
    console.log(url);
    return data;
  } catch (error) {
    // console.log(error);
    return { error: "Unable to find location. Please try again!!..." };
  }
};

// geocode("surat").then((res) => res);
// geocode("surat").then((res) => res);

module.exports = geocode;
