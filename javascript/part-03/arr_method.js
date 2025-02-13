// indexOf

let color = ["green", "black", "yellow", "brown"];

console.log(color.indexOf("yellow")); // 2
console.log(color.indexOf("green")); // 0
console.log(color.indexOf("orange")); // -1 beacause it's color not exists in array

// includes method (if element exists in array then return true, otherwise return false)

console.log(color.includes("black")); // true
console.log(color.includes("grey")); // false
console.log(color.includes("white")); //false

// concat

let primary = ["red", "yellow", "green"];
let secondary = ["orange", "green", "violet"];

let allColor = primary.concat(secondary);
let allRevColor = secondary.concat(primary);

console.log(allColor); // [ 'red', 'yellow', 'green', 'orange', 'green', 'violet' ]
console.log(allRevColor); // [ 'orange', 'green', 'violet', 'red', 'yellow', 'green' ]

// reverse method (when we use reverse method for reverse the array element.after we print original array, which also print in reverse order. if we want to print array in original array then we need again use revere method )

let nums = [23, 45, 24, 64];

console.log(nums.reverse()); // [ 64, 24, 45, 23 ]
console.log(nums); // [ 64, 24, 45, 23 ]
console.log(nums.reverse()); // [ 23, 45, 24, 64 ]

// slice methods in array

let mobiles = ["realme", "oppo", "apple", "infinix", "samsung", "galaxy"];

console.log(mobiles.length);

console.log(mobiles.slice()); // [ 'realme', 'oppo', 'apple', 'infinix', 'samsung', 'galaxy' ]
console.log(mobiles.slice(1)); // [ 'oppo', 'apple', 'infinix', 'samsung', 'galaxy' ]
console.log(mobiles.slice(3, 5)); // [ 'infinix', 'samsung' ]
console.log(mobiles.slice(-3));    // [ 'infinix', 'samsung', 'galaxy' ] 
console.log(mobiles.slice(mobiles.length - 1)); // [ 'galaxy' ]
console.log(mobiles.slice(mobiles.length)); //  []
console.log(mobiles.slice(6)); // []


// splice method in  array (means change in originnal array. you can check in below string)
let colors = ["red", "yellow", "blue","orange","pink","white"];

console.log(colors.splice(4)); // [ 'pink', 'white' ] 
console.log(colors);    // [ 'red', 'yellow', 'blue', 'orange' ]
console.log(colors.splice(0,1));    //[ 'red' ]
console.log(colors);    // [ 'yellow', 'blue', 'orange' ]

// here, push element by push method
colors.push("brown","green");
console.log(colors); // [ 'yellow', 'blue', 'orange', 'brown', 'green' ]
console.log(colors.splice(1,2));    // [ 'blue', 'orange' ]
console.log(colors);    // [ 'yellow', 'brown', 'green' ]
console.log(colors.splice(0,0,"blue","orange"));    // [] , (means 0 index(first parameter), not any change(second parameter), after add lement at 0 index(third parameter))
console.log(colors); // [ 'blue', 'orange', 'yellow', 'brown', 'green' ]
console.log(colors.splice(2,0,"black")); // []. (means number 2-index, 0 means not any delete element, after add black at 2-index)
console.log(colors); // [ 'blue', 'orange', 'black', 'yellow', 'brown', 'green' ]
console.log(colors.splice(1,1,"red"));  // [ 'orange' ]
console.log(colors);    // [ 'blue', 'red', 'black', 'yellow', 'brown', 'green' ]

// short method (use for string and letter, not for the number)

let countries = ["ind","usa","aus","can","pak"];

console.log(countries.sort());  // [ 'aus', 'can', 'ind', 'pak', 'usa' ]

let letters = ['e','r','m','h','l'];
console.log(letters.sort());    // [ 'e', 'h', 'l', 'm', 'r' ]
