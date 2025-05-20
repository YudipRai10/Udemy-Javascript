// INHERITANCE
// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }

//   sleep() {
//     console.log(`${this.name} is sleeping`);
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";

//   run() {
//     console.log(`${this.name} is running`);
//   }
// }

// class Fish extends Animal {
//   name = "fish";
// }

// const rabbit = new Rabbit();
// const fish = new Fish();

// rabbit.alive = false;
// console.log(rabbit.alive);

// rabbit.eat();
// fish.eat();

// rabbit.sleep();
// fish.sleep();

// rabbit.run();

// SETTER & GETTER
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error("Width must be a positive number");
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("Height must be a positive number");
//     }
//   }

//   get width() {
//     return this._width.toFixed(1);
//   }

//   get height() {
//     return this._height.toFixed(1);
//   }

//   get area() {
//     return (this._height * this._width).toFixed(1);
//   }
// }

// const rect = new Rectangle(1000, 2);

// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.area);

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a positive number");
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get age() {
    return this._age;
  }
}

const person1 = new Person("212", "323", 21);
console.log("First Name:", person1.firstName);
console.log("Last Name:", person1.lastName);
console.log("Full Naeme:", person1.fullName);
console.log("Age:", person1.age);
