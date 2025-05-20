class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";

  run() {
    console.log(`${this.name} is running`);
  }
}

class Fish extends Animal {
  name = "fish";
}

const rabbit = new Rabbit();
const fish = new Fish();

rabbit.alive = false;
console.log(rabbit.alive);

rabbit.eat();
fish.eat();

rabbit.sleep();
fish.sleep();

rabbit.run();
