// Select the input, button, and ul elements
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

// Add a 'click' event listener to the button
btn.addEventListener("click", function () {
  // Create a new li element
  let listItem = document.createElement("li");
  listItem.innerText = inp.value;

  // Append the li element to the ul
  ul.appendChild(listItem);

  // Create a delete button for the li element
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete");

  // Append the delete button to the li element
  listItem.insertAdjacentElement("beforeend", deleteBtn);

  // Clear the input field
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  // console.dir(event.target.nodeName);
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});

// // Add a 'click' event listener to the delete button
// let delBtns = document.querySelectorAll(".delete");

// for (let delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let parentElmnt = delBtn.parentElement;
//     parentElmnt.remove();

//   });
// }

// Remove the redundant code for adding event listeners to delete buttons
// This code is not needed as we are adding event listeners to delete buttons dynamically
// let delBtns = document.querySelectorAll(".delete");

// for (let delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let parentElmnt = delBtn.parentElement;
//     parentElmnt.remove();
//   });
// });
