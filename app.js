const path = require("path");
const express = require("express");
const { title } = require("process");
const hbs = require("hbs");
const request = require("request");
// const weatherData = require("./utills/weather.js");
const geocode = require("./utills/geocode.js");
const forcast = require("./utills/forcast.js");
const { error } = require("console");

const app = express();

//Define path for express config
const publicPath = path.join(__dirname, "/public");
const viewPath = path.join(__dirname, "/templates/views");
const partialPath = path.join(__dirname, "/templates/partial");

//Setup handler bars
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

//Setup static directory to server
app.use(express.static(publicPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Whether",
    name: "Bhautik Rakhasiya",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Bhautik Rakhasiya",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Bhautik Rakhasiya",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Please provide address",
    });
  }
  
  // weatherData(req.query.address)

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }
      forcast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );

  // res.send({
  //   forcast: "This is forcast",
  //   location: req.query.location,
  // });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Bhautik Rakhasiya",
    reason: "Help artical is not found.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Bhautik Rakhasiya",
    reason: "Page not found.",
  });
});

app.listen(4000, () => {
  console.log("Server is start on port no 4000...");
});
