// assignment operator

let number = 5;

console.log(number); // 5

number *= 10;

console.log(number);  // 50

// unery operator

let year = 2025;
console.log(year); // 2025

let newyear = year++;
console.log(newyear); // 2025
console.log(year);  // 2026

newyear = ++year;
console.log(newyear); // 2027
console.log(year); // 2027

let x = 1;
y = x++;
console.log(y)
console.log(x);
// ++x;
// console.log(x);

// Practice Quetion 

// what is the value of each variable in each line of code  
let num = 5;
let newNum = num++;
console.log(num);  // 6
console.log(newNum);  // 5

newNum = ++num;

console.log(num);  // 7
console.log(newNum);  // 7


// Boolean 

let age = 13;
let isAdult = false;

console.log(isAdult);
console.log(typeof isAdult); // false

age = 21;
isAdult = true;
console.log(isAdult); // true


// type conversion 

let valueType = 3;
console.log(typeof valueType); // number

valueType = false;
console.log(typeof valueType); // boolean


// string

let firstName ="Mayur";
console.log(firstName);

let lastName = "Thakor";
console.log(lastName);

let fullName = firstName+" "+lastName;
console.log(fullName);
console.log(typeof fullName);

let char = 'm';
console.log(char);
console.log(typeof char);

let num1 = "123";
console.log(num1);
console.log(typeof num1);

let empty = " ";
console.log(empty);
console.log(typeof empty);

// string indices 

let name = "TONY STARK";
console.log(name[0]);   // T
console.log(name[5]);   // S
console.log(name[3]);   // Y
console.log(name[7]);   // A
console.log(name[100]);  // undefined 

console.log(name.length); 
console.log(name[name.length]);
console.log(name[name.length-1]); // k
console.log(typeof name.length);

// concatenation 
console.log("mayur"+" "+"Thakor"); // mayur thakor
console.log("name"+1);   // name1

// null and undefined 

let a;
console.log(a); // undefined
 
a = "namste javascript";
console.log(a[50]);  // undefined

let abc = null;
console.log(abc); // null





