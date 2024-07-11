console.log("This is client side javascript file!!...");

// const url = "http://localhost:4000/weather?address=";

const form = document.querySelector("form");
const search = document.querySelector("input");
const firstMessage = document.querySelector(".first-message");
const secondMessage = document.querySelector(".second-message");
const thirdMessage = document.querySelector(".third-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  firstMessage.textContent = "Loading...";
  secondMessage.textContent = "";
  thirdMessage.textContent = "";

  const inputData = search.value;
  fetch("/weather?address=" + inputData)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        firstMessage.textContent = data.error;
      } else {
        firstMessage.textContent = "City : " + data.location.name;
        secondMessage.textContent =
          "Forecast : " +
          data.current.condition.text +
          " It is currently " +
          data.current.temp_c +
          " degress out. There is a " +
          data.current.precip_in +
          "% chance of rain.";
        thirdMessage.textContent = "Last_updated :" + data.current.last_updated;
      }
    });
});
