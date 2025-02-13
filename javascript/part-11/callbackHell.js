// select the h1 element
let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("yellow", 1000, () => {
//   changeColor("red", 1000, () => {
//     changeColor("blue", 1000, () => {
//       changeColor("green", 1000);
//     });
//   });
// });

console.log("hello");
console.log("javascript");
console.log("wordl");

// Callback Hell in JavaScript refers to a situation where multiple nested callbacks are used, making the code difficult to read, debug, and maintain. This typically occurs when asynchronous operations depend on one another in a sequential manner.

// Characteristics of Callback Hell
// Deep nesting of functions.
// Hard to understand and maintain.
// Error handling becomes complex.
// Debugging is challenging due to loss of clarity.
// Example of Callback Hell
// Imagine a scenario where:

// You fetch user data.
// Then fetch user orders.
// Then fetch details of a specific order.

//---------------------------------------------
// using promises

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return changeColor("yellow", 1000);
  })
  .then(() => {
    console.log("yellow color was completed");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("blue color was completed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color was complted");
  });

//   // Select the h1 element
// let h1 = document.querySelector("h1");

// // Function to change the color of h1 element after a delay using Promises
// function changeColor(color, delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve();
//     }, delay);
//   });
// }

// // Sequentially change the color of h1 element using Promises
// changeColor("yellow", 1000)
//   .then(() => changeColor("red", 1000))
//   .then(() => changeColor("blue", 1000))
//   .then(() => changeColor("green", 1000))
//   .catch((error) => console.error(error));

// // Log messages to the console
// console.log("hello");
// console.log("javascript");
// console.log("world");

// // Explanation of Callback Hell
// // Callback Hell in JavaScript refers to a situation where multiple nested callbacks are used,
// // making the code difficult to read, debug, and maintain. This typically occurs when asynchronous
// // operations depend on one another in a sequential manner.

// // Characteristics of Callback Hell:
// // - Deep nesting of functions.
// // - Hard to understand and maintain.
// // - Error handling becomes complex.
// // - Debugging is challenging due to loss of clarity.

// // Example of Callback Hell:
// // Imagine a scenario where:
// // - You fetch user data.
// // - Then fetch user orders.
// // - Then fetch details of a specific order.
