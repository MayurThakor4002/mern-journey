// Select the button element
let btn = document.querySelector("button");

// Add a 'click' event listener to the button
btn.addEventListener("click", async () => {
  // Fetch a cat fact using the getFacts function
  let fact = await getFacts();
  // console.log(fact);

  // Select the paragraph element with the ID 'result'
  let p = document.querySelector("#result");
  // Set the inner text of the paragraph to the fetched cat fact
  p.innerText = fact;
});

// URL to fetch cat facts
let url = "https://catfact.ninja/fact";

// Async function to fetch cat facts using Axios
async function getFacts() {
  try {
    // Make a GET request to the URL using Axios
    let res = await axios.get(url);
    // console.log(res);
    // console.log(res.data);
    // console.log(res.data.fact);

    // Return the cat fact from the response data
    return res.data.fact;
  } catch (e) {
    // Log any errors that occur during the fetch process
    console.log("Err:- ", e);
    // Return a fallback message if an error occurs
    return "No fact found";
  }
}

// Uncomment the following line to test the getFacts function directly
// getFacts();
