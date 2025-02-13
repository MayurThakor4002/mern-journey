// JSON string representing a fact about cats
let jsonRes =
  '{"fact":"A cat\'s normal pulse is 140-240 beats per minute, with an average of 195.","length":73}';

// Parse the JSON string into a JavaScript object
let validRes = JSON.parse(jsonRes);

// Log the resulting object to the console
// console.log(validRes.fact);
console.log(validRes);

let student = {
  name: "mayur",
  graduation: "Btech CSE"
};

let jsonData = JSON.stringify(student);

console.log(jsonData);
