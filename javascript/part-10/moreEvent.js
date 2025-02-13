// let inp = document.querySelector("#user");

// inp.addEventListener("change", function (){

//     console.log("change event fired");
// })



let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

// Select the input element with the ID 'user'
let user = document.querySelector("#user");

// Add a 'change' event listener to the input element
user.addEventListener("change", function () {
    // Log a message to the console when the 'change' event is fired
    console.log("change event");
    console.log("final value: ",this.value);
});

user.addEventListener("input", function () {
    // Log a message to the console when the 'change' event is fired
    console.log("input event");
    console.log("final value: ",this.value);
});