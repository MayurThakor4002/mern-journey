// Parent class 'Person' - contains common properties and methods
class Person {
  // Constructor method runs when a new object is created
  constructor(name, age) {
    console.log("this is a person constructor"); // Executes when Person is instantiated
    this.name = name; // Assigns name to the object
    this.age = age;   // Assigns age to the object
  }

  // Method inside the Person class, shared by all instances
  talk() {
    console.log("hello, my name is " + this.name);
  }
}

// 'Student' class inherits from 'Person'
class Student extends Person {
  constructor(name, age, marks) {
    console.log("this is a student constructor"); // Executes when Student is instantiated

    super(name, age); // Calls the parent (Person) constructor to set name & age

    this.marks = marks; // Additional property specific to Student
  }
}

// 'Teacher' class inherits from 'Person'
class Teacher extends Person {
  constructor(name, age, subject) {
    console.log("this is a teacher constructor"); // Executes when Teacher is instantiated

    super(name, age); // Calls the parent (Person) constructor to set name & age

    this.subject = subject; // Additional property specific to Teacher
  }
}

// Creating an instance of Student
let stud1 = new Student("calf", 23, 90);
console.log(stud1);  // Logs the Student object with its properties
console.log(stud1.name); // Accesses 'name' property of Student
stud1.talk(); // Calls the inherited 'talk' method from Person

// Creating an instance of Teacher
let teach1 = new Teacher("riddhi", 30, "web technology");
console.log(teach1);  // Logs the Teacher object with its properties
console.log(teach1.name); // Accesses 'name' property of Teacher
teach1.talk(); // Calls the inherited 'talk' method from Person
