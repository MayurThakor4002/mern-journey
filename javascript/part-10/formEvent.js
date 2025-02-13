let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // alert("form submitted Successfully");

//   let user = document.querySelector("#user");
//   let pass = document.querySelector("#pass");

let user = this.elements[0]; // or form.element[0]
let pass = this.elements[1]; // or form.element[1]

//   console.dir(inp);
  console.log("Username is ",user.value);
  console.log("Password is ",pass.value);

  alert(`Hi ${user.value}, your password is ${pass.value}`);
});
