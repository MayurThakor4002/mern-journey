// Importing the Express framework
const express = require("express");

// Creating an Express application
const app = express();

// Logging the Express app object (for debugging purposes)
console.dir(app);

// Defining the port number
let port = 8080;

// Starting the server and listening on the defined port
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

// ⚠️ Middleware (app.use()) that runs for every request
// 🛑 This middleware will override all other routes because it sends a response to every request.
app.use((req, res) => {
  console.log("Request received");

  // Sample JSON object (not being used in response)
  let obj = {
    firstName: "Mayur",
    lastName: "Thakor",
    age: 21,
    hobby: "To learn new Technologies",
  };

  // HTML response (sent to the client)
  let htmlCode = "<h1>Fruits</h1> <ul> <li>apple</li><li>orange</li> </ul>";

  // ❌ Only one res.send() can be executed per request. 
  // The JSON object is never sent because the second res.send() overrides it.
  // res.send(obj);
  res.send(htmlCode);
});

// ===============================
// 🌍 HTTP METHODS EXPLAINED:
// ===============================
// 1️⃣ app.get()  - Handles GET requests (fetching data)
// 2️⃣ app.post() - Handles POST requests (submitting data)
// 3️⃣ app.use()  - Middleware (runs for every request)
// 4️⃣ app.get("*") - Catches undefined routes (404 handling)

// ⚠️ The following routes are commented out, and even if they were active, 
// they would not be executed because the `app.use()` above handles all requests first.

// ✅ Recommended Fix: Move `app.use()` **below** specific routes to avoid blocking them.

// // 🏠 GET request for the root path "/"
// app.get("/", (req, res) => {
//     res.send("I am the root path");
// });

// // 🍎 GET request for "/apple"
// app.get("/apple", (req, res) => {
//     res.send("You contacted the apple path");
// });

// // 🍊 GET request for "/orange"
// app.get("/orange", (req, res) => {
//     res.send("You contacted the orange path");
// });

// // ❌ Handling undefined routes (404 Not Found)
// app.get("*", (req, res) => {
//     res.send("This path doesn't exist");
// });

// // 📩 Handling a POST request to the root "/"
// app.post("/", (req, res) => {
//     res.send("You sent a POST request to the root");
// });
