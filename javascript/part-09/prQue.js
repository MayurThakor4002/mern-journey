// let body = document.querySelector("body");

// let para1 = document.createElement("p");
// para1.innerText = "Hey I'm red!";
// para1.style.color = "red";
// body.appendChild(para1);

// // 2) an <h3> with blue text that says i'm a blue h3!

// let h3 = document.createElement("h3");
// h3.innerText = "i am a blue h3!";
// h3.style.color = "blue";
// body.appendChild(h3);
// // h3.append("hii i am a blue one");

// let div = document.createElement("div");

// div.style.border = "2px solid black";
// div.style.backgroundColor = "pink";

// let h1 = document.createElement("h1");
// h1.innerHTML = "i am in a div";
// div.append(h1);

// let para2 = document.createElement("p");
// para2.innerText = "Me Too";
// div.append(para2);

// body.appendChild(div);



let para1 = document.createElement("p");
para1.innerText = "Hey, i am Red!";
document.querySelector("body").append(para1);

para1.classList.add("red");


let h3 = document.createElement("h3");
h3.innerText = "i am a blue h3";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "i am in div";
para2 = "ME TOO";

div.append(h1);
div.append(para2);
div.classList.add("box");



document.querySelector("body").append(div);