let arr_positive = [7,9,0,-2];
let n = 3;
console.log(arr_positive.slice(0,3));

// Qs .2

let last_arr = [7,9,0,-2];

console.log(last_arr.slice(-3));

// Qs. 3

string ="mr";

if(string.length == 0){
    console.log("string is empty")
}
else{
    console.log("string is not empty");
}

//Qs. 4

let strLower = prompt("Enter name of string: ");
let idx = prompt("enter index number, which you want: ");
// let strLower = "ApnaCollege";

console.log(strLower);
console.log(idx);
console.log(strLower[4]);
console.log(strLower.toLowerCase());

if(strLower[idx] === strLower[idx].toLowerCase()){
    console.log("Given charater index is lowercase");
}
else if(strLower[idx] === strLower[idx].toUpperCase())
{
    console.log("Given charcter index is uppercase");
}
else{
    console.log("given charcter is empty");
}

// Qs.5

let strSpace = "  hello web coders!     ";

console.log(strSpace.length);
console.log(strSpace.trim().length);

console.log(strSpace);
console.log(strSpace.trim());
// Qs 6

let mixArray = ["mayur", 12, 'm', 64, true];

let elm = prompt("Enter your element choice:");

console.log(mixArray.indexOf(elm)); // depend on user input. i true then return 1 otherwise return -1

if(mixArray.indexOf(elm) != -1){
    console.log("element exists in array");
}
else{
    console.log("element doesn't exist in array");
}