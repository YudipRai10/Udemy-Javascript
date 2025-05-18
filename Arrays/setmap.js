// SET
const ids = new Set([1, 2, 3]);

ids.add(4);

for (const entry of ids.entries()) {
  console.log(entry[0]);
}

console.log(ids);
console.log(ids.has(2));

// MAP
const myMap = new Map([
  ["name", ["Alice", "John"]], // Array of names
  ["age", [25, 12]], // Array of ages
]);

// myMap.set("name", "John");
// myMap.set("age", 12);
console.log(myMap);

for (let [key, value] of myMap) {
  console.log(key, value);
}

for (let key of myMap.keys()) {
  console.log(key);
}

for (let value of myMap.values()) {
  console.log(value);
}
