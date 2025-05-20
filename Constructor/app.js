// // class Person {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }

// //   greet() {
// //     console.log(
// //       "Hi, I am " + this.name + " and I am " + this.age + " years old"
// //     );
// //   }
// // }

// // const person = new Person("Max", 30);
// // person.greet();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // Adding a method to the prototype of Person
// Person.prototype.greet = function () {
//   console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
// };

// const person1 = new Person("Alice", 25);
// const person2 = new Person("Bob", 30);

// person1.greet();
// person2.greet();

// function Car(make, model) {
//   this.make = make;
//   this.model = model;
// }

// Car.prototype.startEngine = function () {
//   console.log(`Starting the engine of ${this.make} ${this.model}`);
// };

// const car1 = new Car("Tesla", "Model 3");
// const car2 = new Car("Ford", "Mustang");

// car1.startEngine();
// car2.startEngine();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(this.name + " makes a sound");
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   speak() {
//     super.speak();
//     console.log(this.name + " barks");
//   }
// }

// const dog = new Dog("Rex", "Golden Retriever");
// dog.speak();

// function Hello(name) {
//   this.name = name;
// }

// console.log(Hello.prototype);
// console.log(Hello.__proto__);

// FUNCTION CONSTRUCTOR
// function Car(make, model, year, color) {
//   (this.make = make),
//     (this.model = model),
//     (this.year = year),
//     (this.color = color);
//   this.drive = function () {
//     console.log(
//       `You drive the ${this.color} ${this.make} ${this.model} made in year ${this.year}`
//     );
//   };
// }

// const car1 = new Car("Ford", "Mustang", 2023, "red");
// console.log(car1);
// car1.drive();

// CLASSES
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   displayProduct() {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: $${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salesTax) {
//     return `$${(this.price + this.price * salesTax).toFixed(2)}`;
//   }
// }

// const salesTax = 0.05;

// const product1 = new Product("T-shirt", 19.99);
// const product2 = new Product("Pant", 22.5);

// product2.displayProduct();

// const total1 = product1.calculateTotal(salesTax);
// console.log("Total Price:", total1);

// const total2 = product2.calculateTotal(salesTax);
// console.log("Total Price:", total2);

// STATIC
// class MathUtils {
//   static PI = 3.14159;

//   static getDiameter(diameter) {
//     return diameter * 2;
//   }

//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }
// }

// console.log(MathUtils.PI);
// console.log(MathUtils.getDiameter(20));
// console.log(MathUtils.getCircumference(20));

// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }

//   static getUserCount() {
//     console.log(`There are ${User.userCount} users online`);
//   }

//   sayHello() {
//     console.log(`Hello, my username is ${this.username}`);
//   }
// }

// const user1 = new User("Tom");
// const user2 = new User("Mat");
// const user3 = new User("Sam");

// console.log(user1.username);
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// // console.log(user1.userCount); not in instance but instead own by class

// User.getUserCount();

// SUPER
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`${this.name} moves at a speed of ${speed}mph`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`${this.name} can run`);
    super.move(this.runSpeed);
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}

const rabbit = new Rabbit("rabbit", 2, 25);
const fish = new Fish("rabbit", 5, 12);

console.log(rabbit);

rabbit.run();
fish.swim();
