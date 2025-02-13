let btn = document.querySelector("button");

btn.addEventListener("dblclick", function (event) {
  console.log(event);
  console.log("btn clicked");
});

let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
  // console.log(event);
    // console.log("key:", event.key);
    console.log("key code:",event.code);
  //   console.log("key was pressed");
  if (event.code == "KeyU") {
    console.log("character moves to up");
  } else if (event.code == "KeyD") {
    console.log("character moves to down");
  } else if (event.code == "KeyL") {
    console.log("charter moves to Left");
  } else if (event.code == "KeyR") {
    console.log("character moves to Right");
  }
});
