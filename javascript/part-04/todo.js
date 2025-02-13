// Initialize an empty array to store the to-do list
let todo = [];

// Prompt the user for their first request
let req = prompt("Please enter your request");

// Log the user's initial request to the console
console.log(req);

// Infinite loop to keep the application running
while (true) {
  // If the user enters "quit", exit the application
  if (req == "quit") {
    console.log("Quitting app");
    break;
  }

  // If the user enters "list", display all tasks in the to-do list
  if (req == "list") {
    console.log("-------------");
    // Iterate over the to-do list and display each task with its index
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("-------------");
  }
  // If the user enters "add", prompt them to add a new task
  else if (req == "add") {
    let task = prompt("Please enter the task you want to add");
    todo.push(task); // Add the new task to the to-do list
    console.log("Task added");
  }
  // If the user enters "delete", prompt them to delete a task by index
  else if (req == "delete") {
    let indX = prompt("Enter the index of the task you want to delete");
    todo.splice(indX, 1); // Remove the task at the specified index
    console.log("Task deleted");
  }
  // If the user enters an unrecognized command, display an error message
  else {
    console.log("Wrong request");
  }

  // Prompt the user for their next request
  req = prompt("Please enter your request");
}
