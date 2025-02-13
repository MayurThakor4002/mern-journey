
// function savetoDb(data){
//     return new Promise( (resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() *10) + 1;
//         if(internetSpeed > 5){
//             resolve("sucess: data was saved");
//         }else{
//             reject("failure: data not saved");
//         }
//     });
// }

// console.log(savetoDb("mayur thakor"));

// Function to simulate saving data to a database using Promises
function savetoDb(data) {
    return new Promise((resolve, reject) => {
      // Simulate internet connection strength (random number between 1 and 10)
      let internetSpeed = Math.floor(Math.random() * 10) + 1;
      
      // If internet speed is greater than 5, resolve the promise
      if (internetSpeed > 5) {
        resolve("success: data was saved");
      } else {
        // Otherwise, reject the promise
        reject("failure: data not saved");
      }
    });
  }
  
  // Call the function and log the promise (will be pending initially)
  savetoDb("mayur thakor")  
  .then((message) => {
    console.log(message); // Logs "success: data was saved" if resolved
  })
  .catch((error) => {
    console.log(error); // Logs "failure: data not saved" if rejected
  });


//   Explanation of Promises in JavaScript
// Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never.

// Creating a Promise:

// A promise is created using the Promise constructor, which takes a function with two parameters: resolve and reject.
// resolve is called when the asynchronous operation is successful.
// reject is called when the asynchronous operation fails.
// Using a Promise:

// A promise has three states: pending, fulfilled, and rejected.
// When a promise is created, it is in the pending state.
// If the operation is successful, the promise transitions to the fulfilled state and calls the resolve function.
// If the operation fails, the promise transitions to the rejected state and calls the reject function.
// Handling a Promise:

// Promises can be handled using .then() for success and .catch() for failure.