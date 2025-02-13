// this is for click me button name
// let btn = document.querySelector("button");

// // console.dir(btn);
// // btn.onclick = function () {
// //     alert("button was clicked");
// // }

// function sayHello() {
//   alert("Hello");
// }

// // Correct: Assigning the function reference
// btn.onclick = sayHello;

// // Incorrect: Immediately invoking the function
// // btn.onclick = sayHello();

// this is for like me button

let btns = document.querySelectorAll("button");

for (let i =0; i<btns.length;i++) {
  btns[i].onclick = sayHello;
  btns[i].onmouseenter = function () {
    console.log("you entered a button no: ",i+1);
  }
}

function sayHello() {
  alert("hello");
}
