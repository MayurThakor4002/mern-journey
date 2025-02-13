// Object representing a student and their details
const student = {
  name: "Mayur", // Student's name
  age: 21, // Student's age
  englishScore: 60, // Score in English
  mathScore: 70, // Score in Math
  physicsScore: 75, // Score in Physics

  // Method to calculate and log the average score of the student
  calculateAverage() {
    const average = (this.englishScore + this.mathScore + this.physicsScore) / 3;
    console.log(average); // Logs the average score
  },

  // Method to log a greeting message with the student's name
  logGreeting(message) {
    console.log(`${message} ${this.name}!`); // Logs a message with the student's name
  },
};

// Logging student details and calling methods
console.log(student); // Logs the entire student object
console.log(student.age); // Logs the student's age
console.log(student.calculateAverage()); // Logs the average score
console.log(student.logGreeting("Hello")); // Logs a greeting message

// Example of try-catch to handle errors
try {
  console.log(a); // Throws an error since 'a' is not defined
} catch (error) {
  console.log("Caught error!! 'a' is not defined"); // Logs an error message
}

// Arrow function to calculate the sum of two numbers
const calculateSum = (num1, num2) => {
  return num1 + num2; // Returns the sum of num1 and num2
};

console.log(calculateSum(23, 3)); // Logs: 26

// Arrow function to calculate the power of a number
const calculatePower = (base, exponent) => {
  return Math.pow(base, exponent); // Returns base raised to the power of exponent
};

console.log(calculatePower(4, 2)); // Logs: 16

// Arrow function to log "hello world"
const logHelloWorld = () => {
  console.log("hello world"); // Logs "hello world"
};

// Function to call another function multiple times
function repeatFunction(func, count) {
  for (let i = 1; i <= count; i++) {
    func(); // Calls the provided function
  }
}

console.log(repeatFunction(logHelloWorld, 4)); // Logs "hello world" 4 times

// Arrow function with implicit return to calculate the product of two numbers
const multiplyNumbers = (num1, num2) => num1 * num2;

console.log(multiplyNumbers(4, 3)); // Logs: 12
console.log(multiplyNumbers(6, 6)); // Logs: 36
