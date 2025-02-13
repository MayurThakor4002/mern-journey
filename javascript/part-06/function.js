// Function to print a simple poem
function printPoem() {
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder what you are");
  }
  
  // Calling the printPoem function
  printPoem();
  
  // Function to simulate rolling a dice (random number between 1 and 6)
  function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
    console.log(rand);
  }
  
  // Calling the rollDice function
  rollDice();
  
  // Function to print info about a person (name and age)
  function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);  // Template literal to print the name and age
  }
  
  // Calling the printInfo function with different arguments
  printInfo("Mayur", 21);
  printInfo(23, "Raksha");
  printInfo("Banty");
  
  // Function to calculate the average of three numbers
  // Commented out the function as you mentioned it's incomplete
  // function findAvg(num1, num2, num3) {
  //   let avg = (num1 + num2 + num3) / 3;
  //   console.log("The average is:", avg);
  // }
  
  // Prompt user for input and call findAvg function
  // let a = parseFloat(prompt("Enter num1:"));
  // let b = parseFloat(prompt("Enter num2:"));
  // let c = parseFloat(prompt("Enter num3:"));
  // findAvg(a, b, c);
  
  // Function to print a multiplication table for a given number
  // Commented out the function as it was not fully executed
  // function printMulTable(num) {
  //   console.log(`Multiplication table for ${num}:`);
  //   for (let i = 1; i <= 10; i++) {
  //     console.log(`${num} x ${i} = ${num * i}`);
  //   }
  // }
  // let num = parseInt(prompt("Enter number for multiplication table"));
  // printMulTable(num);
  
  // Function to calculate the sum of two numbers
  function sum(a, b) {
    console.log("hii");
    console.log("hello forgets");
    console.log("to speak hare krishna");
    return a + b;  // Returning the sum of a and b
    console.log("hello coders");
    console.log("hi javascript coders");
  }
  
  // Calling the sum function and printing the result
  console.log(sum(sum(5, 2), 6));
  
  // Function to check if someone is an adult based on age
  function isAdult(age) {
    if (age >= 18) {
      return "adult";  // Returns "adult" if age is 18 or above
    } else {
      return "not adult";  // Returns "not adult" if age is below 18
    }
  }
  
  // Calling the isAdult function and printing the result
  console.log(isAdult(23));
  
  // Function to calculate the sum of numbers from 1 to n
  function sumOfNumber(n) {
    let sum = 0;
    for (let i = n; i != 0; i--) {  // Loop from n down to 1
      sum += i;  // Add i to sum
    }
    return sum;  // Return the final sum
  }
  
  // Calling sumOfNumber function to calculate the sum of numbers from 1 to 100
  let getSum = sumOfNumber(100);
  console.log(getSum);
  
  // Function to concatenate elements of an array into a single string
  function concat(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
      result += array[i];  // Concatenate each element of the array
    }
    return result;  // Return the concatenated string
  }
  
  // Calling concat function with an array of strings
  let strArr = ["Hello", "World", "This", "is", "JavaScript"];
  console.log(concat(strArr));  // Output: "HelloWorldThisisJavaScript"
  