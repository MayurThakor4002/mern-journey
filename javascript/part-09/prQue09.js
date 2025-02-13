// // create a new input and button element on the page using javascript only. set the text of button to "Click Me"
// let btn = document.createElement("button");
// let input = document.createElement("input");

// btn.innerText = "Click Me!";

// document.querySelector("body").appendChild(btn);
// document.querySelector("body").appendChild(input);

// // add following attributes to the element
// // 1). change placeholder value of input to "username"

// // input.placeholder = "username";
// input.setAttribute("placeholder", "username");
// btn.setAttribute("id", "btn");

// console.dir(btn.getAttribute("id"));
// console.dir(input.getAttribute("placeholder"));

// // access the btn using the querySelector and button id. Chnage the buttonbackground color to blue and text color to white

// btn = document.querySelector("#btn");
// btn.classList.add("btnClass");

// // create an h1 elementon the page and set it's text to "DOM practice" underlined. Change it's color to purple

// let h1 = document.querySelector("h1");
// h1.classList.add("underline");

// // Create a p tag on the page and set its text to "Apna College Delta Practice" Where the Delta is bold.

// let p = document.createElement("p");
// document.querySelector("body").append(p);

// p.innerHTML = "Apna College <b>Delta</b> Practice";

// Create a new button and input element on the page
let btn = document.createElement("button");
let input = document.createElement("input");

// Set the text of the button to "Click Me!"
btn.innerText = "Click Me!";

// Append the button and input elements to the body of the document
document.querySelector("body").appendChild(btn);
document.querySelector("body").appendChild(input);

// Add placeholder attribute to the input element with the value "username"
input.setAttribute("placeholder", "username");

// Add an id attribute to the button with the value "btn"
btn.setAttribute("id", "btn");

// Log the id of the button and placeholder of the input element to the console
console.dir(btn.getAttribute("id"));
console.dir(input.getAttribute("placeholder"));

// Access the button using querySelector and its id
btn = document.querySelector("#btn");

// Add a CSS class to style the button with background color blue and text color white
btn.classList.add("btnClass");

// Create an h1 element and set its text to "DOM practice"
let h1 = document.createElement("h1");
h1.innerHTML = "<ul>DOM Practice</ul>"; // Set text
document.querySelector("body").appendChild(h1); // Append the h1 element to the body

// Add an underline to the h1 text and change its color to purple
h1.classList.add("underline");

// Create a p tag and set its text to "Apna College Delta Practice" with "Delta" in bold
let p = document.createElement("p");
document.querySelector("body").appendChild(p); // Append the p element to the body

p.innerHTML = "Apna College <b>Delta</b> Practice"; // Set innerHTML to include bold text

