const axios = require("axios");
const { response } = require("express");
console.log("This is client side javascript file!!...");

const url = "http://localhost:4000/weather?address=";

const form = document.querySelector("form");
const search = document.querySelector("input");
const firstMessage = document.querySelector(".first-message");
const secondMessage = document.querySelector(".second-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  firstMessage.textContent = "Loading...";
  secondMessage.textContent = "";

  const inputData = search.value;
  axios.get(url + inputData).then((data) => {
    if (data.error) {
      firstMessage.textContent = data.error;
    } else {
      firstMessage.textContent = "City : " + data.location;
      secondMessage.textContent = "Forecast : " + data.forecast;
    }
  });
});
