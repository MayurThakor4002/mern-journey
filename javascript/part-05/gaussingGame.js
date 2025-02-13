// Prompt the user to enter a maximum number for the guessing range
const max = parseInt(prompt("Enter your max number:"));

// Validate the input to ensure the user enters a valid positive number
if (isNaN(max) || max <= 0) {
  console.error("Invalid input. Please enter a positive number next time.");
} else {
  // Generate a random number between 1 and the max number (inclusive)
  const rand = Math.floor(Math.random() * max) + 1;

  // Prompt the user to make their first guess
  let guess = prompt("Enter your guess (or type 'quit' to exit):");

  while (true) {
    // Check if the user wants to quit the game
    if (guess.toLowerCase() === "quit") {
      console.log("Quitting the game. Thanks for playing!");
      break;
    }

    // Convert the guess to a number for comparison
    const guessNumber = parseInt(guess);

    // Validate the user's guess input
    if (isNaN(guessNumber)) {
      guess = prompt("Invalid input. Please enter a number or type 'quit' to exit:");
      continue;
    }

    // Check if the guess matches the random number
    if (guessNumber === rand) {
      console.log(`You are right! Congratulations! The random number was ${rand}.`);
      break;
    }
    // Provide hints if the guess is incorrect
    else if (guessNumber < rand) {
      guess = prompt("Hint: Your guess is too small. Please enter a larger number:");
    } else {
      guess = prompt("Hint: Your guess is too large. Please enter a smaller number:");
    }
  }
}


