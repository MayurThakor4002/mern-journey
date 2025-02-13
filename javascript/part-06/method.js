let calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  num: 50
};

console.log(calculator);
console.log("------------");
console.log(calculator.add);
console.log("------------");
console.log(calculator.add(45,45));
console.log(calculator.mul(2,3));
console.log(calculator.num);