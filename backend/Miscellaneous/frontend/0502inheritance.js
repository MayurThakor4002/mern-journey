// Base class 'Mammals' (Parent class)
class Mammals {
    constructor(name) {
      this.name = name;   // Assigns the name to the object
      this.habitat = "Earth"; // Common property for all mammals
      this.type = "Mammal";   // Common property for all mammals
    }
  
    // Method to represent eating behavior
    eat() {
      console.log(`${this.name} eats food.`);
    }
  }
  
  // 'Dog' class inherits from 'Mammals'
  class Dog extends Mammals {
    constructor(name) {
      super(name); // Calls the parent constructor and sets 'name'
    }
  
    // Method specific to Dog class
    bark() {
      console.log(`${this.name} barks loudly.`);
    }
  
    // Overriding the 'eat' method from Mammals class
    eat() {
      console.log(`${this.name} eats bones.`);
    }
  }
  
  // 'Cat' class inherits from 'Mammals'
  class Cat extends Mammals {
    constructor(name) {
      super(name); // Calls the parent constructor and sets 'name'
    }
  
    // Method specific to Cat class
    meow() {
      console.log(`${this.name} meows softly.`);
    }
  }
  
  // Creating an instance of Dog
  let dog1 = new Dog("charles");
  console.log(dog1); // Logs the Dog object with its properties
  dog1.bark(); // Calls the 'bark' method specific to Dog
  dog1.eat();  // Calls the overridden 'eat' method of Dog (not the parent one)
  
  // Creating an instance of Cat
  let cat1 = new Cat("whiskers");
  console.log(cat1); // Logs the Cat object with its properties
  cat1.meow(); // Calls the 'meow' method specific to Cat
  cat1.eat();  // Calls the inherited 'eat' method from Mammals (not overridden)
  