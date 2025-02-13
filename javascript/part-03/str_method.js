// TRIM METHOD IN STRING

let msg = "    hello! good mor  n ing     ";
let method = msg.trim();

console.log(method); // here, removes space from starting and ending
console.log(msg); // here, print as it is write in msg

// let name = prompt("Enter your name"); //"             mayur thakor   ";
let name = "             mayur thakor   ";
console.log(name); //   "             mayur thakor   ";

let newName = name.trim();

console.log(newName); //"mayur thakor";

// --------------------------------------------------------

// uppercase and lowercase in string

let str1 = "Random String";

console.log(str1.toUpperCase());

let strLower = str1.toLowerCase(); // RANDOM STRING
console.log(strLower); // random string

// string methods with arguments

let str2 = "HelloApnaCollege";

let indexOf = str2.indexOf("College");
console.log(indexOf);

console.log(str2.indexOf("college")); // -1 here, college is not found in str2 string.
console.log(str2.indexOf("e")); // 1 here, e is come to indexof 1 according to first index of occurance

// method chaining

let str = "     I Love Coding    ";

let newStr = str.trim().toLowerCase();
console.log("After the use trim and lowercase methods new string is: ", newStr); // "i love coding"

newStr = newStr.indexOf("love");
console.log(newStr); // 2  here, check index of love after the apply trim and lowercase method

console.log(str.indexOf("Coding")); // 12 here, check index for coding sun-string in STR name string

// slice

str = "apnacollege";

console.log(str.slice(0, 4)); // apna
console.log(str.slice(4)); // college
console.log(str.slice(4, str.length)); // college

console.log(str.slice(-3)); // ege
console.log(str.slice(-7, -2)); // colle

// replace and repeat methods

let replaceStr = "ilovecoding";

console.log(replaceStr.replace("love","like")); // ilikecoding;
console.log(replaceStr.replace("i","we"));  // welovecoding

let newreplaceStr = replaceStr.replace("love","like");
console.log(newreplaceStr.replace("i","we"));  // welikecoding

replaceStr = "apnaapnaapna";
console.log(replaceStr.replace("apna","collge")); // collgeapnaapna here, only change first occurance

// repeat

let vegetable = "tomato ";
console.log(vegetable.repeat(3)); // tomatotomatotomato here, repeat string three times



