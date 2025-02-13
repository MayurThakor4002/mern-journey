// Arrow function that returns the square of a number "n"
const calculateSquare = (number) => number * number; // Multiplies the number by itself
console.log(calculateSquare(7)); // Logs: 49

// Function to print "Hello World" 5 times at intervals of 2 seconds each
const intervalId = setInterval(() => {
  console.log("Hello World"); // Logs "Hello World" every 2 seconds
}, 2000);

// Stops the interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId); // Clears the interval
  console.log("Interval cleared"); // Logs when the interval is stopped
}, 10000);

// Arrow function named "arrayAverage" that calculates the average of an array of numbers

console.log("avg:");
const numbers = [43, 63, 57, 48, 85, 39]; // Array of numbers
const arrayAverage = (numbers) => {
  let totalSum = 0; // Variable to store the sum of numbers
  for (let number of numbers) {
    totalSum += number; // Adds each number to the total sum
  }
  return totalSum / numbers.length; // Calculates and returns the average
};

console.log(arrayAverage(numbers)); // Logs: Average of the array

// Arrow function named "isEven" to check if a number is even
const isEven = (number) => number % 2 === 0; // Returns true if number is divisible by 2

console.log(isEven(67)); // Logs: false (67 is not even)

// Output analysis of the following code:


const object = {
  message: "hello, world",
  logMessage() {
    console.log(this.message); // Refers to "message" property of the object
  },
};
setTimeout(object.logMessage, 1000); // Logs: undefined (this is lost when logMessage is detached from the object)

// Output analysis of the following code:

let length = 4; // Global variable length
function callback() {
  console.log(this.length); // Logs the "length" property of the current context
}

const obj = {
  length: 5, // Property of the object
  method(callback) {
    callback(); // Calls the function as a regular function, not as a method
  },
};

console.log(obj.method(callback, 1, 2)); // Logs: undefined (callback runs in global context where "this.length" is undefined)
