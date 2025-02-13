
// ---------------------- Explanation ----------------------
// This Node.js script demonstrates the usage of the "give-me-a-joke" package 
// to generate different types of jokes, such as random dad jokes, Chuck Norris jokes, 
// custom jokes, and jokes of the day.

// ---------------------- Package Installation ----------------------
// Packages in Node.js are external modules that add extra functionalities to your project.
// You can install a package in two ways:
// 1. **Local Installation** (Recommended) - Installs the package inside the project's directory.
//    Command: `npm install give-me-a-joke`
//    - This makes the package available only for this project.
// 2. **Global Installation** (Not Recommended) - Installs the package system-wide.
//    Command: `npm install -g give-me-a-joke`
//    - This allows access to the package in any Node.js project, but it’s not ideal for dependency management.
// --------------------------------------------------------

// Uncomment the below section to use the "figlet" package for ASCII text art
// var figlet = require("figlet");

// figlet("Jay Jay Shree Ram...", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data); // Prints "Jay Jay Shree Ram..." in ASCII text format
// });

// Import the "give-me-a-joke" package
var giveMeAJoke = require("give-me-a-joke");

// 1. Fetch a random dad joke
giveMeAJoke.getRandomDadJoke(function (joke) {
  // console.log(joke); // Uncomment this line to print the joke
});

// 2. Fetch a random Chuck Norris joke
giveMeAJoke.getRandomCNJoke(function (joke) {
  // console.log(joke); // Uncomment this line to print the joke
});

// 3. Fetch a customized joke with a specific first and last name
var fn = "Jackie"; // First Name
var ln = "Chan";   // Last Name
giveMeAJoke.getCustomJoke(fn, ln, function (joke) {
  // console.log(joke); // Uncomment this line to print the joke
});

// 4. Fetch a random "Joke of the Day" from a specific category
// Allowed categories: "blonde", "knock-knock", "animal", "jod"
var category = "blonde";
giveMeAJoke.getRandomJokeOfTheDay(category, function (joke) {
  // console.log(joke); // Uncomment this line to print the joke
});
