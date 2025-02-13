// Remove all occurrences of a specific number from an array
let arrays = [1, 2, 3, 4, 5, 6, 2, 3]; // Input array
let num = 2; // Number to be removed
let newArr = []; // Array to store the result

// Loop through the array
for (let i = 0; i < arrays.length; i++) {
  if (arrays[i] == num) {
    continue; // Skip the current iteration if the number matches
  }
  newArr.push(arrays[i]); // Add the number to the new array if it doesn't match
}

console.log(newArr); // Output the modified array without the specified number

// Find the sum of digits and count of digits in a number
let number = -287152; // Input number (can be negative)
let count = 0; // Counter to track the number of digits
let lastDigit, sum = 0; // Variables for the last digit and sum of digits

number = Math.abs(number); // Convert the number to its absolute value
console.log(number); // Log the absolute value of the number

// Loop until the number becomes 0
while (number > 0) {
  lastDigit = number % 10; // Extract the last digit
  sum += lastDigit; // Add the last digit to the sum
  number = Math.floor(number / 10); // Remove the last digit
  count++; // Increment the digit counter
}

console.log(count); // Output the count of digits
console.log(sum); // Output the sum of digits

// Calculate the factorial of an integer
let intNum = 4; // Input integer
let factorial = 1; // Initialize factorial to 1

// Loop from the integer down to 1
for (let i = intNum; i > 0; i--) {
  factorial *= i; // Multiply the factorial by the current number
}
console.log(factorial); // Output the factorial

// Find the largest number in an array
let arr = [35, 67, 12, 56, 667, 45]; // Input array
let largest = 0; // Initialize the largest number to 0

// Loop through the array
for (let i = 0; i < arr.length; i++) {
  if (largest < arr[i]) { // Check if the current number is larger than the largest
    largest = arr[i]; // Update the largest number
  }
}
console.log(largest); // Output the largest number in the array
