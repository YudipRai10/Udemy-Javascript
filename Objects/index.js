const keyName = "level";

const person = {
  "first name": "Tom",
  age: 30,
  [keyName]: "hi",
  greet() {
    console.log(`Hello ${this.name}`);
  },
  2.5: "hello",
};

// Adding and Modifying Properties
person.age = 35;
// delete person.name;
person.isAdmin = true;

// console.log(person["first name"]);
// console.log(person[2.5]);
console.log(person);
