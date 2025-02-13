// for given starts of an array, change it to final using splice
//  start: [january,july,march,august]
//  final: [july,june,march,august]

let months = ["january","july","march","august"];
 
console.log(months.splice(0,2,"july","june"));
console.log(months);

// return the index of the "javascript" from the given array. if it was reversed

let lang = ["c","c++","html","javascript","phython","java","c#","sql"];

console.log(lang.reverse());
console.log(lang.indexOf("javascript"));

