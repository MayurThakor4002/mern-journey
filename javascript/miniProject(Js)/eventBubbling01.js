

// Select the div, ul, and all li elements
let containerDiv = document.querySelector("div");
let list = document.querySelector("ul");
let listItems = document.querySelectorAll("li");

// Add a 'click' event listener to the div element
containerDiv.addEventListener("click", function () {
  console.log("div was clicked");
});

// Add a 'click' event listener to the ul element
list.addEventListener("click", function (event) {
  // Stop the click event from bubbling up to the div
  event.stopPropagation();
  console.log("ul was clicked");
});

// Add a 'click' event listener to each li element
for (let listItem of listItems) {
  listItem.addEventListener("click", function (event) {
    // Stop the click event from bubbling up to the ul
    event.stopPropagation();
    console.log("li was clicked");
  });
}

// Event Bubbling: 
// Event Bubbling: When an event occurs on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
// Stopping Propagation: event.stopPropagation() is used to prevent the event from bubbling up to parent elements.