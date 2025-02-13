// URL to fetch cat facts
let url = "https://catfact.ninja/fact";

// Fetch cat facts using Promises
fetch(url)
  .then((res) => {
    // console.log(res);
    // Parse the response as JSON
    return res.json();
  })
  .then((data1) => {
    // Log the first cat fact
    // console.log(data1);
    console.log("Data1: ", data1.fact);
    // Fetch another cat fact
    return fetch(url);
  })
  .then((res) => {
    // Parse the second response as JSON
    return res.json();
  })
  .then((data2) => {
    // Log the second cat fact
    console.log("Data2: ", data2.fact);
  })
  .catch((err) => {
    // Log any errors that occur during the fetch process
    console.log("ERROR: -", err);
  });

fetch(url);

// Using fetch with Async-Await

// URL to fetch cat facts
let url2 = "https://catfact.ninja/fact";

// Async function to fetch cat facts
async function getFacts() {
  try {
    // Fetch the first cat fact
    let res = await fetch(url2);
    // Parse the response as JSON
    let data = await res.json();
    // Log the first cat fact
    console.log(data);
    // console.log(data.fact);

    // Fetch the second cat fact
    let res2 = await fetch(url2);
    // Parse the second response as JSON
    let data2 = await res2.json();
    // Log the second cat fact
    console.log(data2);
    // console.log(data2.fact);
  } catch (e) {
    // Log any errors that occur during the fetch process
    console.log("ERROR: -", e);
  }
}

// Call the async function to fetch cat facts
// console.log(getFacts());
getFacts();

console.log("i am enjoy to learn javascript concept");
