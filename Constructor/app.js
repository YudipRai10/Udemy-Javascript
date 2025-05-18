// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(
//       "Hi, I am " + this.name + " and I am " + this.age + " years old"
//     );
//   }
// }

// const person = new Person("Max", 30);
// person.greet();

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype of Person
Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.greet();
person2.greet();

function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.startEngine = function () {
  console.log(`Starting the engine of ${this.make} ${this.model}`);
};

const car1 = new Car("Tesla", "Model 3");
const car2 = new Car("Ford", "Mustang");

car1.startEngine();
car2.startEngine();

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    super.speak();
    console.log(this.name + " barks");
  }
}

const dog = new Dog("Rex", "Golden Retriever");
dog.speak();

function Hello(name) {
  this.name = name;
}

console.log(Hello.prototype);
console.log(Hello.__proto__);
