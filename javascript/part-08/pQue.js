// Check if all numbers in the array are multiples of 10
let numbersArray = [-10, 60, 40, 4, -4, 56];

let areAllMultiplesOfTen = numbersArray.every((num) => num % 10 === 0); // Use .every() to check the condition for all elements
console.log("Are all numbers multiples of 10? ", areAllMultiplesOfTen);

// Find the minimum number in the array using the reduce method
function findMinimum(array) {
  // Use the reduce method to find the smallest number
  let minimumValue = array.reduce((currentMin, currentNum) => {
    console.log("Current minimum value (accumulator): ", currentMin);
    console.log("Current element being processed: ", currentNum);

    // Compare currentMin with currentNum and return the smaller value
    return currentMin < currentNum ? currentMin : currentNum;
  });

  return minimumValue; // Return the smallest value found
}

// Example array of numbers
let exampleArray = [45, 73, 28, 90, 23, 54, 32, 1];

// Call the function to find the minimum value
let minimumNumber = findMinimum(exampleArray);
console.log("The minimum number is: ", minimumNumber);
