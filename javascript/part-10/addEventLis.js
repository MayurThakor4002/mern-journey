let btns = document.querySelectorAll("button")

for(let btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;

    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function() {
        console.log("double Clicked me!");
    });
}

function sayHello() {
    console.log("Hello from the AddEvenListener");
}

function sayName() {
    console.log("Apna Collge");
}

let p = document.querySelector("p");

p.addEventListener("click", function(){
    console.log("p clicked");
    p.style.color = "blue";
});

let div = document.querySelector("div");
div.addEventListener("mouseenter", function(){
   console.log("mouse entered inside the box")
    div.style.backgroundColor = "yellow";
});