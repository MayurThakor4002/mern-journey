const express = require("express"); // Importing Express framework
const app = express(); // Creating an Express application instance
const path = require("path"); // Importing the 'path' module to work with file and directory paths

const port = 3000; // Defining the port number

// Serving static files (CSS and JS) from the 'public' directory
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

// Setting EJS as the template/view engine
app.set("view engine", "ejs");
// Defining the path for the views (EJS templates)
app.set("views", path.join(__dirname, "/views"));

// Route for the home page
app.get("/", (req, res) => {
  res.send("Instagram Home page"); // Sending a simple text response
});

// Dynamic route for Instagram username
app.get("/ig/:username", (req, res) => {
  let { username } = req.params; // Extracting the username from URL parameters
  const followers = ["mayur", "rohit", "antrral", "naresh"]; // Sample followers data

  // Rendering 'insta.ejs' template and passing username and followers data
  res.render("insta.ejs", { username, followers });
});

// Dynamic route for handling generic usernames
app.get("/:username", (req, res) => {
  let { username } = req.params; // Extracting the username from URL parameters
  console.log(username); // Logging the username

  const instaData = require("./views/data.json"); // Importing user data from a JSON file
  console.log(instaData); // Logging the data for debugging

  let data = instaData[username]; // Fetching user-specific data from the JSON file
  console.log(data); // Logging the retrieved data

  if (data) {
    res.render("insta02.ejs", { data }); // Rendering 'insta02.ejs' with user data
  } else {
    res.render("error.ejs"); // Rendering an error page if user data is not found
  }
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`); // Logging server start message
});

