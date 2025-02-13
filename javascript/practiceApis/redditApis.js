let url = "https://www.reddit.com/r/Wallstreetbets/top.json";

// console.log(fetch(url));
let btn = document.querySelector("button");

btn.addEventListener("click", async () =>{
    let childArry = await getReddit();
    console.log(childArry);

    getDomain(childArry);
    
});

function getDomain(childArry) {
    for(let child of childArry){
       console.log(child.data.domain);
    //    console.log(child.domain);
    }
}

async function getReddit() {
  try {
    let res = await axios.get(url);
    console.log(res);
    // console.log( res.data.data.children
    // );
    return res.data.data.children;
  } catch (e) {
    console.log("Error ", e);
  }
}
