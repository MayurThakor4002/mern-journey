// Importing the Express framework
const express = require("express");
const app = express();

// Defining the port number
const port = 3000;

// Starting the server and listening on the defined port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// 🏠 GET request for the root path "/"
app.get("/", (req, res) => {
  res.send("Hii! This is the root path"); // Sending a simple text response
});

// 🧑 Dynamic route with parameters (username & id)
app.get("/:username/:id", (req, res) => {
  console.log(req.params); // Logging parameters in the console

  // Extracting values from the request parameters
  let { username, id } = req.params;

  // Creating an HTML response
  let htmlStr = `<h1>Welcome to the page of @${username}</h1>`;

  res.send(htmlStr); // Sending the HTML response
});

// ❌ Handling undefined routes (404 Not Found)
app.get("*", (req, res) => {
  res.status(404).send(`<h1>404 - This Page Doesn't Exist</h1>`);
});

/*
  🛑 Issue in Original Code:
  ---------------------------
  - The `app.get("*")` route was **inside** the dynamic route (`/:username/:id`).
  - This means it would **never execute** unless `/:username/:id` is triggered.
  - **Fix**: Moved `app.get("*")` **outside** to ensure it runs for unmatched routes.
*/

