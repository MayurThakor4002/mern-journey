const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ express: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  let user = req.query.user;
  res.send(`Standard Get Response, Welcome to ${user}`);
});

app.post("/register", (req, res) => {
  let {user, pass} = req.body;

  // console.log(req.body);
  res.send(`Standard Post Response, welcome to ${user} and password is ${pass}`);
});

app.listen(port, (req, res) => {
  console.log(`Lisening on port ${port}`);
});
