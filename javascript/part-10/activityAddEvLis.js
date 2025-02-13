// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let h3 = document.querySelector("h3");
//   let randomColor = togetRandomColor();
//   h3.innerText = randomColor;

//   let div = document.querySelector("div");
//   div.style.background = randomColor;
// });

// function togetRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red},${green},${blue})`;

//   return color;
// }

// Select the button element
let btn = document.querySelector("button");

// Add a click event listener to the button
btn.addEventListener("click", function () {
  // Select the h3 element
  let h3 = document.querySelector("h3");

  // Generate a random color
  let randomColor = togetRandomColor();

  // Set the inner text of the h3 element to the random color
  h3.innerText = randomColor;

  // Select the div element
  let div = document.querySelector("div");

  // Set the background color of the div to the random color
  div.style.background = randomColor;

  console.log("color updated");
});

// Function to generate a random color
function togetRandomColor() {
  // Generate random values for red, green, and blue
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  // Create an RGB color string

  let color = `rgb(${red},${green},${blue})`;

  // Return the generated color
  return color;
}
