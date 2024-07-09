const request = require("request");
const axios = require("axios");


const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=03b61e6e457c45709ee113142240407&q=" +
    latitude +
    "," +
    longitude;
  console.log(url);
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.condition.text +
          " It is currently " +
          body.current.temp_c +
          " degress out. There is a " +
          body.current.precip_in +
          "% chance of rain."
      );
    }
  });
};

// const forecast = (latitude, longitude) => {
//   const url =
//     "https://api.weatherapi.com/v1/current.json?key=03b61e6e457c45709ee113142240407&q=" +
//     latitude +
//     "," +
//     longitude;
//   console.log(url);

//   const forcastData = axios.get(url);
//   forcastData
//     .then((res) => {
//       const body = res.data;
//       console.log(
//         body.current.condition.text +
//           " It is currently " +
//           body.current.temp_c +
//           " degress out. There is a " +
//           body.current.precip_in +
//           "% chance of rain."
//       );
//     })
//     .catch((error) => {
//       console.log("Unable to find location!",error);
//     });
// };


module.exports = forecast;
