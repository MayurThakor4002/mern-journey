// 'process.argv' is an array that contains command-line arguments passed to the Node.js script.
// The first element (process.argv[0]) is the path to the Node.js executable.
// The second element (process.argv[1]) is the path to the script file being executed.
// Subsequent elements (process.argv[2] and onwards) are the actual command-line arguments provided by the user.

// Log the process arguments (command-line arguments)
console.log(process.argv);

// Store the arguments in a variable
let args = process.argv;

// Loop through the arguments starting from index 2 (ignoring 'node' and script name)
for (let i = 2; i < args.length; i++) {
    console.log("Welcome to " + args[i]); // Print a welcome message for each argument
}
