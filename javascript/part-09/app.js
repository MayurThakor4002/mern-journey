// // selecting by element ID
// console.dir(document.getElementById("mainImg"));
// console.dir(document.getElementById("mainImg").src);

// document.getElementById("mainImg").src = "assets/creation_3.jpeg";

// // selecting by ClassName
// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImages.length; i++) {

//   // console.dir(smallImages[i]);
//   // console.dir(smallImages[i].src);

//   smallImages[i].src = "assets/spiderman_img.png";
//   console.log(`value of image no. ${i} is changed`);
// }

// // selecting by TagName

// console.dir(document.getElementsByTagName("p")[1].innerText);

// Query Selectors

console.dir(document.querySelector("p"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
