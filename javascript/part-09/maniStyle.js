// let heading = document.querySelector("h1");
// console.dir(heading);
// console.dir(heading.style);

// heading.style.color = "green";
// console.dir(heading.style.color);

// heading.style.backgroundColor = "yellow";
// console.log(heading.style.backgroundColor);

// let links = document.querySelectorAll(".box a");

// console.dir(links);
// console.dir(links.length);
// // for (let i = 0; i < links.length; i++) {
// //   links[i].style.color = "red";
// //   console.dir(links[i]);
// // }

// for(let link of links){
//     link.style.color = "blue";
// }

// console.log("------------------------------");

// // classList

// let heading = document.querySelector("h1");

// console.dir(heading.classList);
// console.dir(heading.classList.add("green"));
// console.dir(heading.classList);
// console.dir(heading.classList.add("underline"));
// console.dir(heading.classList);

// console.dir(heading.classList.remove("green"));
// console.dir(heading.classList);

// console.dir(heading.classList.contains("color")); // if color class exist hoy to TRUE, otherwise, false
// console.dir(heading.classList.contains("underline"));

// console.dir(heading.classList);
// console.dir(heading.classList.toggle("underlne")); // if underline exist hoy to remove thai jase
// console.dir(heading.classList.toggle("green")); // if green class exist nai karto hoy to add thai jase

// let box = document.querySelector(".box")
// box.classList.add("bgColor");

// console.log("-----------------");

// let h4 = document.querySelector("h4");
// console.dir(h4.parentElement);
// console.dir(h4.childElementCount);
// console.dir(h4.children);

// let img = document.querySelector("img");
// console.dir(img.previousElementSibling);
// console.dir(img.nextElementSibling);

// img.previousElementSibling.style.color = "blue";

console.log("------------");

// adding element

let newp = document.createElement("p");

newp.innerText = "Hii i am a new para";

let box = document.querySelector(".box");

box.appendChild(newp);
console.dir(box.appendChild(newp));

newp.append("this is new text");

box.prepend(newp);

let para = document.querySelector("p");
let btn = document.createElement("button");
btn.innerHTML = "click here";
para.insertAdjacentElement("beforebegin", btn);
para.insertAdjacentElement("afterbegin", btn);
para.insertAdjacentElement("beforeend", btn);
para.insertAdjacentElement("afterend", btn);


// removing element