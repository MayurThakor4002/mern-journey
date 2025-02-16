// Define a function to create a person object with a name, age, and a greet method
function personMaker(name, age) {
  // Create a person object with the given name and age
  let person = {
    name: name,
    age: age,
    // Define a method to greet using the person's name
    greet() {
      console.log(`Hi, my name is ${this.name}`);
    },
  };

  // Return the created person object
  return person;
}

// Create two person objects using the personMaker function
let p1 = personMaker("alfa", 20);
let p2 = personMaker("beta", 19);

// Log the person objects to the console
console.log(p1); // Output: { name: 'alfa', age: 20, greet: [Function: greet] }
p1.greet(); // Hi, my name is alfa

console.log(p2); // Output: { name: 'beta', age: 19, greet: [Function: greet] }

// Call the greet method on the second person object
p2.greet(); // Output: Hi, my name is beta

// Compare the greet methods of the two person objects and log the result
console.log(p1.greet == p2.greet); // Output: false

// disadvantages of factory function : Factory functions can lead to memory inefficiency and performance issues due to method duplication for each object instance.
