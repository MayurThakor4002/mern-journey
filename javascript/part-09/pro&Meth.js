// para = document.querySelector("p");

// console.dir(para);
// console.dir(para.innerText);
// console.log(para.textContent);
// console.dir(para.innerHTML);

// // para.innerText = "hii, i'm <b> mayur thakor </b>";
// // console.dir(para.innerText);

// para.innerHTML = "hii, you are <b>raksha thakor</b>";
// console.dir(para.innerHTML);

// let heading = document.querySelector("h1");
// console.log(heading);
// console.log(heading.innerText);

// heading.innerText = "hii this is <u> heading</u>";
// // console.log(heading.innerText);

// heading.innerHTML = `<u>${heading.innerText}</u>`;


// manipulating Attributes 

let img = document.querySelector("img");
console.dir(img);

let imgId = img.getAttribute("id");
console.dir(imgId);

img.setAttribute("id","spiderImg");
console.dir(img.id);

let src = img.getAttribute("src");
console.dir(src);

img.setAttribute("src","assets/creation_1.png");

console.dir(img.src);