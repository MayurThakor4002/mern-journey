const express = require("express");
const app = express();
const port = 8080;

app.get("/register", (req, res) => {
  let user = req.query.user;
  res.send(`Standard Get Response, Welcome to ${user}`);
});

app.post("/register", (req, res) => {
  let user = req.query.user;
  console.log(req.query.user);
  res.send(`Standard Post Response, welcome to ${user}`);
});

app.listen(port, (req, res) => {
  console.log(`Lisening on port ${port}`);
});
