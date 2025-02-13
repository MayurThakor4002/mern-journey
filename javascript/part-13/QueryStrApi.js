let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);
  let collArr = await getColleges(country);
  console.log(collArr);

  show(collArr);
});

function show(collArr) {
  let list = document.querySelector("ul");
  list.innerText = "";
  for (let college of collArr) {
    let listItem = document.createElement("li");
    console.log(college.name);
    list.appendChild(listItem);
    listItem.innerText = college.name;
  }
}
// let country = "india";

async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    console.log(res);

    return res.data;
  } catch (e) {
    console.log("Error: ", e);
  }
}
