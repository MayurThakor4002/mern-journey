async function hello() {
  // throw "some rendom error"
  return "hello";
}
console.log(hello());

hello()
  .then((result) => {
    console.log("promise was resolved");
    console.log("result was ", result);
  })
  .catch((err) => {
    console.log("promise was rejected with err: ", err);
  });

let demo = async () => {
  return 5;
};

console.log(demo());
