let inp = document.querySelector("#editor");
let p = document.querySelector("p");
inp.addEventListener("input", function () {
    console.log(inp.value);
    p.innerText = inp.value;

})