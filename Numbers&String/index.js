console.log(Number.MAX_SAFE_INTEGER);

function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(5, 10));

// Tagged Template

function productDescription(strings, prodName, prodPrice) {
  console.log(strings);
  console.log(prodName);
  console.log(prodPrice);
  return "This is a product";
}

const prodName = "Javascript Course";
const prodPrice = 19.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}`;
console.log(productOutput);
