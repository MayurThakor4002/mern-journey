// Default Parameters: Allow functions to have default values for parameters
function sum(a, b = 5) {
  return a + b; // If 'b' is not passed, it defaults to 5
}
console.log(sum(3)); // Output: 8 (3 + 5)
console.log(sum(2, 4)); // Output: 6 (2 + 4)

function subtract(a = 5, b) {
  return a - b; // If 'a' is not passed, it defaults to 5
}
console.log(subtract(5)); // Output: NaN (b is undefined, cannot perform subtraction)
console.log(subtract(6, 3)); // Output: 3 (6 - 3)

// Spread Operator: Expands elements of an array or string into individual elements

let numberArray = [1, 2, 3, 4, 0];
console.log("Original array:", numberArray); // Output: [ 1, 2, 3, 4, 0 ]
console.log("Spread array:", ...numberArray); // Output: 1 2 3 4 0

// Math.min expects individual numbers, not an array
console.log("Minimum (without spread):", Math.min(numberArray)); // Output: NaN
console.log("Minimum (with spread):", Math.min(...numberArray)); // Output: 0

// Spread operator with strings
console.log("Spread string:", ..."apnacollege"); // Output: a p n a c o l l e g e

// Spread in Array Literals
let copiedArray = [...numberArray]; // Create a shallow copy of the array
console.log("Original array:", numberArray);
console.log("Copied array:", copiedArray);

copiedArray.push(10); // Modify the copied array
console.log("Modified copied array:", copiedArray);

numberArray.pop(); // Modify the original array
console.log("Modified original array:", numberArray);

let charArray = [..."hello"]; // Convert string to array of characters
console.log("Array of characters:", charArray);

let oddNumbers = [1, 3, 5, 7, 9];
let evenNumbers = [2, 4, 6, 8];
let combinedNumbers = [...oddNumbers, ...evenNumbers]; // Combine two arrays
console.log("Combined array:", combinedNumbers);

// Spread in Object Literals
let userData = {
  email: "ironman@gmail.com",
  password: "abcd",
};

let extendedUserData = { ...userData, id: 12, country: "India" }; // Add new properties
console.log("Extended user data:", extendedUserData);

let sampleArray = [2, 5, 3, 63, 2];
let arrayAsObject = { ...sampleArray }; // Convert array to an object
console.log("Array as object:", arrayAsObject);

let stringAsArray = [..."hello"]; // Convert string to array
let arrayAsProperty = { stringAsArray }; // Assign array as a property in an object
console.log("Array as property in object:", arrayAsProperty);
