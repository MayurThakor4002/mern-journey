// Constructor Function (acts like a blueprint for creating objects)
function ConstructorFun(name, age) {
  this.name = name; // Assign the name property
  this.age = age;   // Assign the age property
  // console.log(this); // Uncommenting this will log the newly created object
}

// Adding a method to the prototype of ConstructorFun
ConstructorFun.prototype.talk = function () {
  console.log(`Hii!, my name is ${this.name}`);
};

// Creating two instances (objects) using the constructor function
let p1 = new ConstructorFun("mayur", 21);
let p2 = new ConstructorFun("harsh", 23);

console.log(p1); // Logs: { name: "mayur", age: 21 }
console.log(p2); // Logs: { name: "harsh", age: 23 }

// Calling the prototype method 'talk' for both objects
p1.talk(); // Output: Hii!, my name is mayur
p2.talk(); // Output: Hii!, my name is harsh

// Checking if both instances share the same function reference for 'talk'
console.log(p1.talk === p2.talk); // Output: true
