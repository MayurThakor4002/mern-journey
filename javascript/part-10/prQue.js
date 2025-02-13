// Select the h1 and p elements
let header = document.querySelector("h1");
let paragraph = document.querySelector("p");

// Add a 'mouseout' event listener to the h1 element
header.addEventListener("mouseout", (event) => {
  console.log(event);
  header.style.color = "red";
  header.innerText = "It's the effect of Mouseout event";
});

// Select the input element with the ID 'kpress'
let input = document.querySelector("#kpress");

// Add a 'keypress' event listener to the input element
input.addEventListener("keypress", (event) => {
  console.log(event.key);
  console.log(event.code);
  // paragraph.innerText = input.value;
});

// Add a 'scroll' event listener to the window
window.addEventListener("scroll", () => {
  console.log("You are scrolling");

  // Change the background color of the body if scrolled more than 100px
  if (window.scrollY > 100) {
    document.querySelector("body").style.backgroundColor = "yellow";
  }
});

// Select the image element with the ID 'img'
const image = document.querySelector("#img");

// Wait for the image to load
image.addEventListener("load", function () {
  console.log("The image has finished loading!");
});

// Create a new button element
let button = document.createElement("button");

// Set the button text and append it to the body
button.innerText = "Click me!";
document.querySelector("body").append(button);

// Add a 'click' event listener to the button
button.addEventListener("click", () => {
  button.style.backgroundColor = "green";
});


// let h1 = document.querySelector("h1");
// let p = document.querySelector("p");

// h1.addEventListener("mouseout", (event) => {
//   console.log(event);
//   h1.style.color = "red";
//   h1.innerText = "it's effect of Mouseout event";
// });

// let inp = document.querySelector("#kpress");

// inp.addEventListener("keypress", (event) => {
//   console.log(event.key);
//   console.log(event.code);
//   // p.innerText = inp.value;
// });

// window.addEventListener("scroll", () => {
//   console.log("you are scrolling");

//   if (window.scrollY > 100) {
//     document.querySelector("body").style.backgroundColor = "yellow";
//   }
// });

// const img = document.querySelector("#img");

// // Wait for the image to load
// img.addEventListener("load", function () {
//   console.log("The image has finished loading!");
// });

// let btn = document.createElement("button");

// btn.innerText = "click me!";
// document.querySelector("body").append(btn);

// btn.addEventListener("click", () => {
//   btn.style.backgroundColor = "green";
//   console.log("button is clicked");
// });

// let h2 = document.querySelector("h2");
// inp.addEventListener("keypress", () => {
//   h2.innerText = inp.value;
//   console.log(inp.value);
// });
