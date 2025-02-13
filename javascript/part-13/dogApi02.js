let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("#out");

btn.addEventListener("click", async () => {
  let link = await getImg();
  console.log(link);

  let img = document.querySelector("img");
  img.setAttribute("src", link);
});

async function getImg() {
  try {
    let res = await axios.get(url);

    // console.log(res);
    return res.data.message;
  } catch (e) {
    console.log("Erro", e);
    return "Not Fact Found";
  }
}
