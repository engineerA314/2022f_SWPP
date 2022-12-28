var num = 12; // It’s better to use const or let if possible
if (num % 2 === 0) {
  console.log("Even"); // console.log() is a function used to print to the browser console.
} else {
  console.log("Odd");
}

var j;
var n = "hello world";
for (j in n) {
  // keys
  console.log(n[j]);
}

for (j of n) {
  // values
  console.log(j);
}

function add1(x, y) {
  // function declaration
  return x + y;
}
var add2 = function (x, y) {
  // function expression
  return x + y;
};
// var add2 = (x, y) => {
// // an arrow function also works.
// return x + y;
// }
console.log(add1(10, 20));
console.log(add2(10, 20));
