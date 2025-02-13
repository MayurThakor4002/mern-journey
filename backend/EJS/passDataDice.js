const express = require("express");
const app = express();
const path = require("path");

const port = 3030;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/dice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("dice.ejs", { diceVal });
});

app.listen(port, () => {
  console.log(`listenig port on ${port}`);
});
