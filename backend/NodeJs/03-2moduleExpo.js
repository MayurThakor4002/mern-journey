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

Short Explanation of require():
`require()` is a built-in function in Node.js used to import modules.

Key Points:
1. It allows accessing functions, variables, and objects from other files.
2. When requiring a module, Node.js searches for the specified file and executes it.
3. If `module.exports` contains an object, `require()` returns that object.
4. Example:
   ```javascript
   const math = require("./mathModule.js");
   console.log(math.sum(3, 4)); // Uses the sum function from the imported module
   ```
*/

// Importing the math module from '03-1moduleExport.js'
const math = require("./03-1moduleExport.js");

console.log(math); // Logs the exported object from the module
console.log(math.sum(3, 4)); // Calls the sum function from the math module
console.log(math.PI); // Accesses the PI constant from the math module

// Importing the color module from '04moduleDir.js'
const color = require("./04moduleDir.js");
console.log(color); // Logs the exported object from the color module
