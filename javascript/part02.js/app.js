// console.log()

console.log("TEch","Talk","with village Boy",4002,(4+0+0+2));

let a = 4;
let b = 5;
console.log("sum is",a+b);

// template literals 

let goldPrice = 73000;
let silverPrice = 80000;

// let output = "The total price is : "+(goldPrice+silverPrice)+" Rupees";

let output = `The total price is: ${goldPrice + silverPrice} Rupees.`;
// let output = `The total price is: ${goldPrice} and ${silverPrice} Rupees.`;

console.log("The total price is :",(goldPrice+silverPrice),"Rupees .");
console.log(output);

//Alert and prompt

alert("something is wrong!");

console.log("this is a simple log");
console.error("this is an error msg");
console.warn("this is a warning msg");

let firstName = prompt("Enter your firstname:"); // here, we can taking input from the user
console.log(firstName); // display console section in browser 

let lastName = prompt("Enter your lastname:");

let msg = `welcome ${firstName} ${lastName}!`;

alert(msg);
console.log(msg);
