// Importing the Express framework
const express = require("express");
const app = express();

// Defining the port number
const port = 3030;

// Starting the server and listening on the defined port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
  ✅ GET request for "/search"
  - This route handles **query parameters** (`req.query`).
  - Example: If the user visits **"/search?q=apple"**, 
    `req.query` will be `{ q: 'apple' }`.
*/
app.get("/search", (req, res) => {
  console.log(req.query); // Logging query parameters in the console

  // Extracting the query parameter "q"
  let { q } = req.query;

  // 🛑 If no query parameter is provided (e.g., "/search" without "?q=something")
  if (!q) {
    return res.send(`<h1>Nothing searched</h1>`); // Return message if no search term is provided
  }

  // ✅ If a query parameter is provided, display the search result
  res.send(`<h1>Result searched for: ${q}</h1>`);
});

/*
  🔍 Explanation of HTTP Methods Used:
  ------------------------------------
  - `GET /search?q=something` → Fetches search results.
  - `req.query` → Retrieves **query parameters** from the URL.
  - `if (!q)` → Handles the case where no search term is provided.
  - `res.send()` → Sends an HTML response.
*/

