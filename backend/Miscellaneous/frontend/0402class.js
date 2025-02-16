class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let p1 = new Person("john", 32)
let p2 = new Person("bob",31);

console.log(p1);
console.log(p2);
p1.greet();
p2.greet();

console.log(p1.greet == p2.greet);


// ❌ Factory function (personMaker) creates a new function every time, leading to inefficiency.
// ✅ Prototype-based methods (Person.prototype.greet) store the function once and share it across instances, improving memory usage.
// 🔹 Use factory functions when simplicity is needed, but for memory-efficient object creation, prefer constructor functions with prototypes or ES6 classes.