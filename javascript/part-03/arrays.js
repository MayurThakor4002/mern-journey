let students = ["mayur", "naresh", "rohit", "antral"];

console.log(students); // mayur naresh rohit antral
console.log(students.length); // 4
console.log(typeof students); //object

let nums = [2, 4, 6, 8];

console.log(nums);
console.log(nums[1]);

let marks = [65, 67, 56, 56, 89];
console.log(marks);

// empty array

let emptyArray = [];
console.log(emptyArray); // []
console.log(emptyArray.length); // 0
console.log(emptyArray[0]); // undefined

// array with multi datatypes values

let info = ["Free Fire", 62, 8.91];

console.log(info); // Free Fire, 62, 8.91
console.log(info[0]); // Free Fire
console.log(info.length); // 3

console.log(info[0].length); // 9
console.log(info[0][5]); // F

console.log(info[2]); // 8.91
console.log(info[1].length); // undefined
console.log(info[1][1]); // undefined

// Arrays are mutable

        // string is unmutable
    let str = "rohit";

    str[0] = "m";
    console.log(str); // rohit

let fruits = ["mango", "apple", "graps"];

console.log(fruits); //[ mango,apple,graps]
fruits[0] = "banana";
console.log(fruits); // [banana,apple,graps]

fruits[10] = "papaya";
console.log(fruits); // ['banana','apple','graps',<7 empty items',papaya]
console.log(fruits.length); // 11
console.log(fruits[5]); //  undefiend

// Arrays methods

// push : add element to end
let cars = ["audi", "bmw", "xuv", "maruti"];
console.log(cars);  // [ 'audi', 'bmw', 'xuv', 'maruti' ]

cars.push("kia");
console.log(cars);  // [ 'audi', 'bmw', 'xuv', 'maruti', 'kia' ]

cars.push("scorphio");
console.log(cars);  // [ 'audi', 'bmw', 'xuv', 'maruti', 'kia', 'scorphio' ]

// pop : delete from end & return it

console.log(cars.pop()); // scorphio
console.log(cars);  //  [ 'audi', 'bmw', 'xuv', 'maruti', 'kia' ]

console.log(cars.pop());    // kia
console.log(cars);  // [ 'audi', 'bmw', 'xuv', 'maruti']

// unshift : add to start

let places = ["dwarika", "somnath", "kagwad", "gir"];
console.log(places); // [ 'dwarika', 'somnath', 'kagwad', 'gir' ]

places.unshift("chotila", "kadi");
console.log(places); //  [ 'chotila', 'kadi', 'dwarika', 'somnath', 'kagwad', 'gir' ]

// shift : delete from start & return it
// console.log(places[0]); // chotila

console.log(places.shift()); // chotila
console.log(places); // [ 'kadi', 'dwarika', 'somnath', 'kagwad', 'gir' ]

places.shift();
places.shift();
places.shift();
console.log(places); // [ 'kagwad', 'gir' ]

let followers = ['a','b','c'];
let blocked = followers.shift();

console.log(followers);     // [ 'b', 'c' ]
console.log(blocked);   // a

// Qs. for the given start of an array, change it to final form using methods

    // start: ["january","july","march",august];
    // final: ["july","june","march","august"];9
    9
    let months = ["january", "july", "march", "august"];
    console.log(months);    // [ 'january', 'july', 'march', 'august' ]

    months.shift();
    months.shift();

    months.unshift("july","june");
    console.log(months);    // [ 'july', 'june', 'march', 'august' ]