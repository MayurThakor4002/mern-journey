// Comparison operator

let marks = 73;

console.log(typeof marks);

console.log(marks > 30);
console.log(marks < 30);
console.log(marks >= 30);
console.log(marks <= 30);
console.log(marks == 73);
console.log(marks != 7);

let abc = 5;
let xyz = "5";
console.log(abc == xyz); // true
console.log(abc != xyz); // false (means ki abc and xyz is equal)

console.log(0 == false); // true    here, check the value only
console.log(0 === false); // false here, check the value and datatypes

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(0 == " "); // true
console.log(0 === " "); // false

// comparison for non-numbers

console.log("A" < "B"); // true
console.log("a" > "b"); // false
console.log("A " > "a"); // false
console.log("b" < "c"); //true

// logical operator

let totalMarks = 70;

if (totalMarks >= 33 && totalMarks < 80 && !false) {
  console.log("You got A grade");
} else {
  console.log("try to add more else-if statement to add more new features");
}

if ((totalMarks >= 33 && totalMarks < 80) || !true) {
  console.log("pass");
}

//Practice Qs
// A "good string" is a string starts with the letter 'a' & has a length > 3. Write a program to find if a string is good or not

let string = "apna college";

console.log(string.length); // 12

if (string[0] == "a" && string.length > 3) {
  console.log("String is good");
} else {
  console.log("String is not good");
}

// Predict the output of following code:

let num = 12;

if (num % 3 === 0 && (num + 1 == 15 || num - 1 == 11)) {
  console.log("safe");
} else {
  console.log("unsafe");
}
