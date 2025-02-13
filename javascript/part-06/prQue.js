// Qs1.WriteaJavaScriptfunctionthatreturnsarrayelementslargerthananumber

function rtnArrElement(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      newArr.push(arr[i]); // Use push to add elements to the array
    }
  }
  return newArr;
}

let arr = [34, 56, 23, 1, 44, 87, 56, 90];
let num = 45; // Pass this dynamically if needed
let newArr = rtnArrElement(arr, num);

console.log(newArr); // Output: [56, 87, 56, 90]

//   WriteaJavaScriptfunctiontoextractuniquecharactersfromastring.
// Example:str=“abcdabcdefgggh”
// ans=“abcdefgh”

function uniqueString(str) {
  // Initialize an empty string to store unique characters
  let newStr = " ";

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Check if the current character is NOT already in newStr
    if (!newStr.includes(str[i])) {
      // If the character is unique, add it to newStr
      newStr += str[i];
    }
  }

  // Return the string with unique characters
  return newStr;
}

let str = "abcdabcdefgggh"; // Input string

let result = uniqueString(str); // Call the function to get unique characters

console.log(result); // Output the result

// Qs3.WriteaJavaScriptfunctionthatacceptsalistofcountrynamesasinputandreturnsthelongestcountrynameasoutput.
// Example:country=["Australia","Germany","UnitedStatesofAmerica"]
// output:"UnitedStatesofAmerica"

function findLongestCountryName(countries) {
  // Initialize a variable to store the longest country name found so far
  let longestCountry = ""; // Start with an empty string

  // Loop through the array of country names
  for (let i = 0; i < countries.length; i++) {
    // Check if the current country's name is longer than the longestCountry
    if (countries[i].length > longestCountry.length) {
      // Update longestCountry with the current country's name
      longestCountry = countries[i];
    }
  }

  // Return the longest country name found
  return longestCountry;
}

// Array of country names
let countries = ["India", "Australia", "Germany", "United States Of America"];

// Call the function to find the longest country name
let longestCountryName = findLongestCountryName(countries);

// Output the result
console.log(longestCountryName); // Output: "United States Of America"

// Que 4. Write a JavaScript function to count the number of vowels in a String argument

function countVowels(str) {
  // Initialize a counter for vowels
  let vowelCount = 0;

  // Define the vowels (both uppercase and lowercase)
  let vowels = "aeiouAEIOU";

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if the character is a vowel
    if (vowels.includes(str[i])) {
      vowelCount++; // Increment the counter
    }
  }

  // Return the total count of vowels
  return vowelCount;
}

// Test the function with an example
let inputString = "hello world";
let finalStr = countVowels(inputString);

console.log(finalStr); // Output: 3

//  Que 5Function to generate a random integer between a specified range [start, end)
function generateRandomIntegerInRange(start, end) {
  // Calculate the difference between the end and start values (the size of the range)
  let rangeSize = end - start;

  // Generate a random number within the range and add the starting value
  // Math.random() generates a floating-point number between 0 and 1
  // Math.floor() ensures the result is an integer
  return Math.floor(Math.random() * rangeSize) + start;
}

// Define the start and end of the range
let rangeStart = 5; // Starting value of the range (inclusive)
let rangeEnd = 10; // Ending value of the range (exclusive)

// Call the function to generate a random number within the range
let randomOutput = generateRandomIntegerInRange(rangeStart, rangeEnd);

// Print the generated random number to the console
console.log(
  "Random number between",
  rangeStart,
  "and",
  rangeEnd,
  ":",
  randomOutput
);
