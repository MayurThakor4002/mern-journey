// Function with Rest Parameters
function logArguments(...args) {
  // `args` gathers all arguments passed to the function into an array
  for (let i = 0; i < args.length; i++) {
    console.log("You gave us:", args[i]); // Log each argument
  }
}

// Call the function with different sets of arguments
console.log("Logging arguments:");
console.log(logArguments(1, 2, 46, 24, 2)); // Pass multiple arguments
console.log(logArguments(63, 53, 62, 75));

// Function to calculate the sum of all arguments using Rest Parameters
function calculateSum(...numbers) {
  // `numbers` is an array of all arguments passed to the function
  return numbers.reduce((totalSum, num) => totalSum + num); // Calculate the sum of elements
}

console.log("Sum of numbers:", calculateSum(54, 32, 54, 23));

// Function with an additional argument before Rest Parameters
function findMinimum(message, ...numbers) {
  // `message` is a fixed parameter, `numbers` collects the rest as an array
  console.log(message); // Print the message
  return numbers.reduce((currentMin, num) => {
    // Find the minimum value from the numbers
    return num < currentMin ? num : currentMin;
  });
}

// Call the function with a message and numbers
console.log("Minimum value with message:");
console.log(findMinimum("HELLO", 43, 23, 65, 34, 2, 65));

// Destructuring an Array
let participantNames = ["mayur", "pratik", "banty", "chaku", "raksha"];

// Destructure the array into variables
let [winner, runnerUp, ...otherParticipants] = participantNames;

console.log("Winner:", winner); // First element of the array
console.log("Runner-Up:", runnerUp); // Second element of the array
console.log("Other participants:", ...otherParticipants); // Remaining elements in the array

// Destructuring an Object
let studentInfo = {
  name: "harsh",
  age: 23,
  class: 12,
  subjects: ["physics", "biology", "chemistry"],
  username: "harsh@123",
  password: "abrc",
};

// Directly destructure properties
let { username, password } = studentInfo;

console.log("Username:", username);
console.log("Password:", password);

// Renaming variables during destructuring and setting default values
let {
  username: user, // Rename `username` to `user`
  password: secret, // Rename `password` to `secret`
  city: location = "Gujarat", // Set a default value for `city`
} = studentInfo;

console.log("Renamed Username:", user);
console.log("Renamed Password:", secret);
console.log("Default City:", location);
