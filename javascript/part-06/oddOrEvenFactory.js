function OddOrEvenFactory(request) {
  if (request == "even") {
    let even = function (n) {
      console.log(n % 2 == 0);
    };
    return even;
  } else if (request == "odd") {
    let odd = function (n) {
      console.log(!(n % 2 == 0));
    };
    return odd;
  } else {
    console.log("wrong request");
  }
}

let request = "odd";

let func = OddOrEvenFactory(request);


console.log(func(5));
console.log(func(10));

request = "even";
func = OddOrEvenFactory(request);

console.log(func(10));
