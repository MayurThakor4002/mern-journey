console.log("Before my if statement");

let carPrice = 100000;

if (carPrice >= 10000) {
  console.log("feel like richman");
  console.log("you are already achieved your dream");
  console.log("Congtulations");
}
if (carPrice <= 10000) {
  console.log("feel like poorman");
  console.log("You need to take your extra affert to acheive the dreams");
  console.log("Bestof luck");
}

let firstName = "mayur";

if (firstName == "mayur") {
  console.log(`welcome ${firstName}`);
}

console.log("After my if statement");

// Practice Quetions

// Qs. Create a traffic  light system that shows what to do based on color

let trafficSignal = "green";

if (trafficSignal === "red") {
  console.log("Right Now, you must stop");
}
if (trafficSignal === "yellow") {
  console.log("you need to drive your vehicle slow");
}
if (trafficSignal === "green") {
  console.log("Right Now, you can enjoy your driving");
}

// else if statement

let month = "augest";

if (month === "january") {
  console.log("winter is here");
} else if (month === "april") {
  console.log("summer is here");
} else if (month === "july") {
  console.log("monsoon is here");
} else {
  console.log("invalid operation");
}

// Practice Quetions
// Create a system to calculate popcorn prices based on the size customer asked for

let size = "XL";
console.log(typeof size);

if (size == "XL") {
  console.log("250 Rupees.");
} else if (size === "L") {
  console.log("200 Rupees");
} else if (size === "M") {
  console.log("100 Rupees");
} else if (size === "S") {
  console.log("50 Rupees");
} else {
  console.log("Invalid choice");
}

// switch statement

let colorNumber = "green";

switch (colorNumber) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("stop down");
    break;
  case "green ":
    console.log("go");
    break;
  default:
    console.log("broken light");
}

//Practice Quetion
// use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.

let day = 0;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid choice");
}
