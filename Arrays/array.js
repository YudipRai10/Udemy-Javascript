// Creating Array
// const numbers = [1, 2, 3, 4, 5];

// const moreNumbers = new Array(1, 2, 3);
// const moreNumbers = new Array("Hi", "Welcome");
// const moreNumbers = new Array(4); // returns 4 as length with empty array, new is not requred

// const yetMoreNumbers = Array.of(1);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);
// const array = Array.from("Hi!");
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// Data stored
// const hobbies = ["cooking", "running"];
// const personalData = [30, "Max", { moreDetail: ["Tom", "Jane"] }];
// console.log(personalData[2]);

// const analyticData = [
//   [1, 2, 3],
//   [10, 12, 14],
// ];

// for (const data of analyticData) {
//   console.log(data);
//   for (const item of data) {
//     console.log(item);
//   }
// }

// Methods
// hobbies.push("fighting");
// hobbies.push("kayaking");
// hobbies.unshift("Reading");

// hobbies.splice(2, 1, "Food");
// console.log(hobbies);

// const testResults = [1, 23, 4, 5, 67, 8, 9, 1];
// const storedResults = testResults.slice(2, 4);
// const end = testResults.slice(3); // from index 3 to end
// console.log(storedResults, testResults);
// console.log(end);
// console.log(testResults.slice(-2)); // start from end
// console.log(testResults.slice(1, -1));

// console.log(testResults.lastIndexOf(1));

// const personData = [{ name: "Max" }, { name: "Tom" }];
// const tom = personData.find((person) => person.name === "Tom");
// const TomIndex = personData.findIndex((person) => person.name === "Tom");
// console.log(tom, TomIndex);

// ForEach
// const prices = [10.99, 5.99, 3.99];
// console.log(Math.min(...prices));
// const tax = 0.2;
// const taxAdjustedPrices = [];
// const taxAdjustedPricesWithForEach = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((price, i) => {
//   const priceDetails = { index: i, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPricesWithForEach.push(priceDetails);
// });

// const taxAdjustedPricesWithMap = prices.map((price, i) => {
//   const priceDetails = { index: i, taxAdjPrice: price * (1 + tax) };
//   return priceDetails;
// });

// console.log(taxAdjustedPricesWithMap);

// const sortedPrice = prices.sort((a, b) => a - b);
// console.log(sortedPrice);

// const filteredPrices = prices.filter((price) => price < 7);
// console.log(filteredPrices);

// const totalPrice = prices.reduce((sum, item) => sum + item, 0);
// console.log(totalPrice);

// const maxPrice = prices.reduce((max, item) => {
//   return max > item ? max : item;
// });
// console.log(maxPrice);

// String
// const data = "New York;10.99;2000";
// const newData = data.split(";");
// console.log(newData);

// const names = ["Max", "Tom"];
// const nameMix = names.join(" ");
// console.log(nameMix);
