/*
Short Explanation of module.exports:
In Node.js, `module.exports` is used to export functions, variables, or objects so they can be imported and used in other files.

Key Points:
1. It allows sharing of code between different modules.
2. You can export:
   - A single function or object:  
     ```javascript
     module.exports = { sum, mul, PI, g };
     ```
   - Multiple properties separately:  
     ```javascript
     module.exports.sum = (a, b) => a + b;
     module.exports.mul = (a, b) => a * b;
     ```
*/

// Different ways to export functions and constants in Node.js

// 1st Approach: Creating an object and exporting it manually
const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const PI = 3.14;
const g = 9.8;

let obj = {
  sum: sum,
  mul: mul,
  PI: PI,
  g: g,
};

module.exports = obj; // Exporting the object containing all values

// 2nd Approach: Directly exporting an object with properties

// const sum = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const PI = 3.14;
// const g = 9.8;

// module.exports = {
//   sum: sum, // Assigning functions and constants to the module.exports object
//   mul: mul,
//   PI: PI,
//   g: g,
// };

// 3rd Approach: Assigning exports directly to module.exports properties

// module.exports.sum = (a, b) => a + b; // Exporting each function separately
// module.exports.mul = (a, b) => a * b;
// module.exports.PI = 3.14;
// module.exports.g = 9.8;

/*
Explanation:
1. The first approach creates an object and exports it as a single entity.
2. The second approach directly exports an object with functions and constants.
3. The third approach assigns each function and constant directly to module.exports.
   - This approach is useful when exporting multiple values without creating an object manually.

All three approaches work in Node.js, and choosing one depends on readability and maintainability.
*/
