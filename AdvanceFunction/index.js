// Pure Function
function sum(x, y) {
  return x + y;
}

// Impure Function
function addRandom(num1) {
  return num1 + Math.random();
}

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

let hobbies = ["sports", "cooking"];

function addHobby(h) {
  h.push("reading"); // Mutating the array
}

addHobby(hobbies);

console.log(hobbies);

// Factory Function
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));

// Closure
let userName = "Max";

function greetUser() {
  let name = "Anna";
  console.log("Hi " + name);
}

let name = "Kat";
userName = "Tom";
greetUser();

// Recursion

// function powerOf(x, n) {
//
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

function powerOf(x, n) {
  //   if (n === 1) {
  //     return x;
  //   }
  //   return x * powerOf(x, n - 1);

  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 4));
