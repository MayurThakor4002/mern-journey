// Array Iteration using forEach
let numbersArray = [1, 2, 3, 4, 5, 6];

// Function to print an element
let printElement = function (element) {
  console.log(element);
};

console.log("Using forEach with a predefined function:");
numbersArray.forEach(printElement);

console.log("Using forEach with an anonymous function directly:");
numbersArray.forEach(function (element) {
  console.log(element);
});

console.log("Using forEach with an arrow function:");
numbersArray.forEach((element) => {
  console.log(element);
});

// Working with an array of objects
let studentData = [
  {
    name: "mayur",
    marks: 90,
  },
  {
    name: "raksha",
    marks: 70,
  },
  {
    name: "banty",
    marks: 80,
  },
];

console.log("Using forEach to iterate over an array of objects:");
studentData.forEach(function (student) {
  console.log(student); // Print the entire student object
});

// Using map to transform an array
let numsToDouble = [1, 2, 3, 4];
let doubledNumbers = numsToDouble.map(function (element) {
  return element * 2; // Multiply each element by 2
});
console.log("Doubled numbers:", doubledNumbers);

let studentGPA = studentData.map((student) => {
  return student.marks / 10; // Calculate GPA from marks
});
console.log("GPA of students:", studentGPA);

// Using filter to extract specific elements
let mixedNumbers = [43, 52, 42, 65, 34, 212, 4, 7];
let oddNumbers = mixedNumbers.filter(function (element) {
  return element % 2 != 0; // Filter odd numbers
});
console.log("Filtered odd numbers:", oddNumbers);

// Using every to check if all elements meet a condition
let allEvenCheck = [2, 3, 2, 4, 5].every((num) => num % 2 == 0);
console.log("Are all numbers even? ", allEvenCheck);

let allOddCheck = [1, 3, 5, 7, 9].every((num) => num % 2 != 0);
console.log("Are all numbers odd? ", allOddCheck);

// Using some to check if any element meets a condition
let hasEvenNumber = [3, 4, 2, 42, 2, 32].some((num) => num % 2 == 0);
console.log("Does the array have any even number? ", hasEvenNumber);

let hasEvenNumberInSmallArray = [3, 5].some((num) => num % 2 == 0);
console.log(
  "Does the small array have any even number? ",
  hasEvenNumberInSmallArray
);

// Using reduce to perform cumulative operations
let numbersToReduce = [1, 2, 3, 34, -3, -50];
let cumulativeDifference = numbersToReduce.reduce(
  (accumulator, element) => accumulator - element
);
console.log("Cumulative difference is: ", cumulativeDifference);

// Using reduce to find the maximum value in an array
let maximumValue = numbersToReduce.reduce(function (currentMax, element) {
  console.log("Current accumulator value (max):", currentMax);
  console.log("Current element:", element);
  return element > currentMax ? element : currentMax;
});
console.log("Maximum value in the array:", maximumValue);
