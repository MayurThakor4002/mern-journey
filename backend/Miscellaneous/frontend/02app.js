// Here, arr1.push and arr2.push both refer to Array.prototype.push, so the comparison returns true.

let arr1 = [];
let arr2 = [];

console.log(arr1.push == arr2.push); // true

// Here, arr3.push now refers to a new function, so it's no longer the same as arr4.push.
let arr3 = [];
let arr4 = [];
arr3.push = function() { console.log("Custom push"); };

console.log(arr3.push == arr4.push); // false

