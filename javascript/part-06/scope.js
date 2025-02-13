// Global Scope
let globalVar = "I am a global variable"; // Accessible anywhere in the script

function functionScopeExample() {
  // Function Scope
  let functionVar = "I am a function-scoped variable"; // Accessible only within this function
  console.log(globalVar); // Accessible because globalVar is in the global scope

  if (true) {
    // Block Scope
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); // Accessible here within the block
  }
  // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

  function innerFunction() {
    // Lexical Scope
    console.log(functionVar); // Accessible because innerFunction is inside the scope of functionScopeExample
    console.log(globalVar); // Accessible because globalVar is in the global scope
  }

  innerFunction();
}

functionScopeExample();
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

let greet = "hello"; // global scope

function changeGreet() {
  let greet = "namaste"; // function scope
  console.log(greet);
  function innerGreet() {
    console.log(greet);
  }
  innerGreet(); // lexical scope
}

console.log(greet);
changeGreet();

// function Expression
let sum = function (a, b) {
  return a + b;
};

let hello = function () {
  console.log("hello");
};
hello();

hello = function () {
  console.log("namaste");
};
hello();

// higher order function

function mltipleGreet(func, count) {
  for (let i = 1; i <= count; i++) {
    func();
  }
}

let respect = function () {
  console.log("namaste");
}

console.log(respect, 10);
