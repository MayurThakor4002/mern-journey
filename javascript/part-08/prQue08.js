// Suqare and su the array elements using the arrow function and then find the average of the array
const squareAndAverage = (arr) => {
    // Square each element
    const squared = arr.map(num => num ** 2);
    // Sum the squared elements
    const sum = squared.reduce((acc, curr) => acc + curr, 0);
    // Calculate the average
    return sum / arr.length;
};

// Example usage:
const numbers = [1, 2, 3, 4];
const average = squareAndAverage(numbers);

console.log(average); // Output: 7.5


// create a new array using the map function whose each element is equal to the original element plus 5.
const addFiveToArray = arr => arr.map(num => num + 5);

// Example usage:
const nums = [1, 2, 3, 4];
const newArray = addFiveToArray(numbers);

console.log(newArray); // Output: [6, 7, 8, 9]


// create a new arrray whose elements are in uppercase of words present in the original array

// let string = ["mayur", "raksha", "chaku", "pratik", "banty"];
// let upperStr = string.map((str) => {
//   return str.toUpperCase();
// });
// console.log(...upperStr);

const toUpperCaseArray = arr => arr.map(word => word.toUpperCase());

// Example usage:
const words = ["hello", "world", "javascript"];
const upperCaseWords = toUpperCaseArray(words);

console.log(upperCaseWords); // Output: ["HELLO", "WORLD", "JAVASCRIPT"]


// write a fucntion called doubleAndReturnArgs which accepts an array and  variable number of arguments. the function shouls return a new array with original array values and all of the additional arguments doubled

function doubleAndReturnArgs(arr, ...args) {
  // Double the additional arguments
  const doubledArgs = args.map((arg) => arg * 2);
  // Return a new array combining the original array and the doubled arguments
  return [...arr, ...doubledArgs];
}

// Example usage:
const result = doubleAndReturnArgs([1, 2, 3], 4, 5, 6);
console.log(result); // Output: [1, 2, 3, 8, 10, 12]

// write a function called mergeObjects that accept two ojects two objects and return a new object which contains all the keys and values of the first object and second object

function mergeObjects(obj1, obj2) {
    // Use the spread operator to merge the two objects
    return { ...obj1, ...obj2 };
}

// Example usage:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = mergeObjects(obj1, obj2);

console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 }

