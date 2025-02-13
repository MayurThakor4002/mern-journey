// Logs an initial greeting message
console.log("Hii there!");

// Arrow function to log a personal introduction
const logIntroduction = () => {
  console.log("I'm Mayur");
};

// Sets a timeout to call logIntroduction after 10 seconds
setTimeout(logIntroduction, 10000);

// Logs welcome messages
console.log("Welcome to");
console.log("Welcome to");

// Arrow function to log a message in intervals
const logNamaste = () => {
  console.log("Namaste Duniya");
};

// Sets an interval to call logNamaste every 2 seconds
const namasteIntervalId = setInterval(logNamaste, 2000);
console.log(namasteIntervalId); // Logs the interval ID for tracking

// Uncomment the following line to clear the namaste interval
// clearInterval(namasteIntervalId);

// Function to log "Hello World"
function logHelloWorld() {
  console.log("Hello World");
}

// Sets an interval to call logHelloWorld every 3 seconds
const helloWorldIntervalId = setInterval(logHelloWorld, 3000);
console.log(helloWorldIntervalId); // Logs the interval ID for tracking
