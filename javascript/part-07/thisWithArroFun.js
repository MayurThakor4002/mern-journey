// Object representing a student and their details
const student = {
    name: "Mayur", // Student's name
    marks: 98, // Student's marks
  
    // Property referring to the global scope (not recommended for use)
    globalScopeReference: this, // Refers to the global object (window in browsers)
  
    // Method to get the student's name
    getName: function () {
      console.log(this); // Logs the student object because 'this' refers to the object containing the method
      return this.name; // Returns the name of the student
    },
  
    // Arrow function to get the student's marks
    getMarks: () => {
      console.log(this); // Logs the parent's scope (global object, not the student object)
      return this.marks; // 'this.marks' will be undefined because arrow functions don't bind their own 'this'
    },
  
    // Method to log the student object inside a setTimeout (uses arrow function to preserve 'this')
    logInfoWithArrow: function () {
      setTimeout(() => {
        console.log(this); // Logs the student object because the arrow function inherits 'this' from the enclosing function
      }, 2000);
    },
  
    // Method to log the global object inside a setTimeout (uses regular function, so 'this' is lost)
    logInfoWithRegularFunction: function () {
      setTimeout(function () {
        console.log(this); // Logs the global object (or undefined in strict mode) because 'this' in a regular function depends on the caller
      }, 2000);
    },
  };
  
  // Logging the result of calling the methods
  console.log(student.getName()); // Logs: student object and "Mayur"
  console.log(student.getMarks()); // Logs: global object and undefined (marks not accessible with arrow function)
  
  // Calling methods that demonstrate behavior of 'this' inside setTimeout
  console.log(student.logInfoWithArrow()); // Logs: student object after 2 seconds
  console.log(student.logInfoWithRegularFunction()); // Logs: global object (or undefined in strict mode) after 2 seconds
  