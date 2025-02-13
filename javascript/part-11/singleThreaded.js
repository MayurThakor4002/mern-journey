// JavaScript is single-threaded and has a synchronous execution model by default, meaning code is executed line by line in the order it appears. However, it is also asynchronous in nature when handling tasks like input/output operations, timers, and network requests, thanks to features like the Event Loop, callback functions, Promises, and async/await.

// Key Points:
// Synchronous Nature:

// JavaScript runs one task at a time in a single thread.
// Blocking tasks, like complex computations, will halt the execution of subsequent code until they complete.

console.log("Start");
console.log("Middle");
console.log("End");
// Output: Start
//         Middle
//         End


// Asynchronous Nature:

// JavaScript handles time-consuming tasks (e.g., API calls, file I/O, or setTimeout) asynchronously to avoid blocking the main thread.
// These tasks are delegated to the browser's or Node.js's runtime environment (Web APIs) and handled via the Event Loop.

console.log("Start");

setTimeout(() => {
    console.log("Inside Timeout");
}, 1000);

console.log("End");
// Output: Start
//         End
//         Inside Timeout
