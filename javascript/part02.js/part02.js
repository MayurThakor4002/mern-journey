// Qs 01. create number variable num with some Value. Now, print "good" if the number is divisible by 10 and print "bad" if it is not

// let num = prompt("Enter the user define number:");
// console.log(num);

// if (num % 10 == 0) {
//   console.log("good");
// } else {
//   console.log("bad");
// }

// Qs 02. take the user's name and age as input using prompts. then return back following statement to the user as an alert (by substituting their name & age):  NAME  is AGE years old.

// let userName = prompt("Enter the fullname:");
// let age = prompt("Enter age: ");

// let alertMsg = `${userName} is ${age} years old.`;

// alert(alertMsg);

// Qs 03

// let quarter = prompt("Enter only one number from 1 to 4: ");
// console.log(quarter);

// note : This is because prompt in js return strings
// And your case statements work on number
// So you need to convert promt output to integer
// let quarter = prompt("Enter only one number from 1 to 4: ");
// quarter = parseInt(quarter);
// By help of parse int
// You can convert your output to integer

let quarter = prompt("Enter only one number from 1 to 4: ");
quarter = parseInt(quarter);

console.log("Enter one number from 1 to 4:", quarter);

// let quarter = 5;

switch (quarter) {
  case 1:
    console.log("January, February, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, Augest, September");
    break;
  case 4:
    console.log("Octomber, November, December");
    break;
  default:
    console.log("Invalid operation");
}

// Qs 05  write to fing the largest of 3 number

let num1 = prompt("num1 is: ");
let num2 = prompt("num2 is: ");
let num3 = prompt("num3 is: ");

console.log("naum1 is", num1);
console.log("naum1 is", num1);
console.log("num3 is", num3);

if (num1 > num2 && num1 > num3) {
  console.log("num1 is largest number");
} else if (num2 > num1 && num2 > num3) {
  console.log("num2 is largest number");
} else {
  console.log("num3 is largest number");
}
