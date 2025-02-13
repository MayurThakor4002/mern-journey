// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i = i - 2) {
//   console.log(i);
// }

// print odd number from 1 to 15

// for (let i = 1; i <= 15; i = i + 2) {
//   console.log(i);
// }

// console.log("backward logic for odd number")

// for (let i =15; i >=1; i = i-2) {
//     console.log(i);
//   }

// print even number from 2 to 10

// for (let i = 1; i <= 10; i = i + 2) {
//   console.log(i);
// }

// user defined multiplication table

// let n = prompt("enter number");
// n = parseInt(n);

// for(let i=n; i<=10*n; i += n){

//     console.log(i);
// }

// choose correct movie name Game

// const favMovie = "kgf";
// let guess = prompt("guess my favourite movie");

// while (guess != favMovie) {
//   if (guess == "queit") {
//     console.log("you Queit");
//     break;
//   }
//   guess = prompt("wrong guess. please try agian");
// }

// if (guess == favMovie) {
//   console.log("congrats!");
// }

// break

let i=1;
while(i<=5){
  if(i==3){
    break;
  }
  console.log(i);
  i++;
}

console.log("We used break at 3");

// arrays with loop

let fruits = ["apple", "banana", "watermelon","orange"];

for(let i=fruits.length-1; i>=0; i--){

  console.log(i, fruits[i]);
}

// nested loop with nested array

let heroes = [
  ["ironman", "spiderman", "thor"], 
  ["superman", "wonder woman", "flash"]
];

for(let i=0; i<heroes.length;i++){

    console.log(`i=${i}, ${heroes[i]}`);
    for(let j=0; j<heroes[i].length;j++){
      console.log(`j=${j}, ${heroes[i][j]}`);
    }
}


// student marks for 3 different classes

let marks = [
  [57,68,89],
  [56,84,90],
  [56,90,67]
];

for(let i=0; i<marks.length; i++){

      console.log(`student marks class #${i+1}`);
  for(let j=0; j<marks[i].length;j++){

    console.log(`student ${j+1} mark ${marks[i][j]}`);  
  }
}

// for of loop

let fruitJuice = ["apple", "banana", "watermelon", "orange"];

for(let fruit of fruitJuice){
  console.log(fruit);
}

for(char of "apnacollege"){
  console.log(char);
}

let classes = [
  ["abc","bcd", "def"],
  ["mno","xyz","klj"],
  ["hrt","jvw", "qrp"]
];

for( element of classes){

    for(eachElement of element){
    console.log(eachElement);
    }
}