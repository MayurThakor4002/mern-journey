// API URL to fetch university data for India
let url = "http://universities.hipolabs.com/search?name=india";

// Select the button element from the document
let btn = document.querySelector("button");

// Add a click event listener to the button
btn.addEventListener("click", async () => {
  let collArr = await getColleges(); // Fetch the college data from API
  console.log(collArr); // Log the fetched data to the console
  show(collArr); // Display the data in the UI
});


function show(collArr) {
  let list = document.querySelector("ul"); // Select the <ul> element
  list.innerText = ""; // Clear any existing list items before adding new ones

  for (let college of collArr) {
    let listItem = document.createElement("li"); // Create a new <li> element

    // // Get the state information, handling cases where it's null/undefined
    // let state = college["state-province"]
    //   ? college["state-province"]
    //   : "Not Available";

    // Set the text content of the list item
    listItem.innerText = `${college.name} - ${college["state-province"]}`;

    // Append the list item to the <ul> element
    list.appendChild(listItem);
  }
}


async function getColleges() {
  try {
    let res = await axios.get(url); // Fetch data from the API using Axios
    return res.data; // Return the API response data
  } catch (e) {
    console.log("Error: ", e); // Log any errors to the console
  }
}
