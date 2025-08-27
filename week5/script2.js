let a = 10;
let b = 40;
let c = a + b;
console.log("Value of c", c);

//declaring or defining a function
function add(a, b) {
  let c = a + b;
  console.log("Value of c", c);
}

function substract(a, b) {
  let c = a - b;
  console.log("Value of c", c);
  return c;
}

function greet(name) {
  let newName = name.toUpperCase();
  let msg = "Hello " + newName;
  console.log(msg);
  return msg;
}

let name = "Camille";
greet(name);
greet("Alice");

//calling off a function
let sum = add(a, b);
console.log("Value of sum", sum);
let sum2 = add(45, 67);
let d = 56;
let e = 8788;
let sum3 = add(d, e);
console.log("Value of sum", sum3);
let balance = substract(100, 35);
console.log("Value of balance", balance);
