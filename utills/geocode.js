const request = require("request");
const axios = require("axios");

const geocode = (address, callback) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=03b61e6e457c45709ee113142240407&q=" +
    address;

  request({ url, json: true }, (error, { body }) => {
    // console.log(body)
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.location.lat,
        longitude: body.location.lon,
        location: body.location.name,
      });
    }
  });
};

// const geocode = async (address, callback) => {
//   const url =
//     "https://api.weatherapi.com/v1/current.json?key=03b61e6e457c45709ee113142240407&q=" +
//     address;
//   await axios
//     .get(url)
//     .then((res) => {
//       callback(undefined, {
//         latitude: res.data.location.lat,
//         longitude: res.data.location.lon,
//         location: res.data.location.name,
//       });
//     })
//     .catch((error) => {
//       console.log("Unable to find location. Try another search.", error);
//     });
// };

module.exports = geocode;
