let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let url = "https://dog.ceo/api/breeds/image/random";
  // let url2 = "https://dog.ceo/api/breeds/image/random";

  fetch(url)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.message);

      let img = document.querySelector("img");
      img.src = data.message;

      return fetch(url);
    })
    .then( (res) => {
        return res.json();
    })
    .then( (data2) =>{
      let img2 = document.querySelector("#img2");

        img2.src = data2.message;
    })
    .catch((err) => {
      console.log("Erro is", err);
    });
});
