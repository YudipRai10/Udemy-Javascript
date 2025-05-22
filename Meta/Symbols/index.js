const uid = Symbol("uid");

const user = {
  // id: "p1", since we can access and modify the value
  [uid]: 123,
  name: "Max",
  age: 30,
};

user.id = "p2";
user.isStudent = true;

console.log(user);

// Iterator: an object that defines a sequence and a way to access its elements one at a time.
const company = {
  // curEmployees: 0,
  employees: ["Max", "Manu", "Anna"],

  // next() {
  //   if (this.curEmployees >= this.employees.length) {
  //     return { value: this.curEmployees, done: true };
  //   }

  //   const returnValue = {
  //     value: this.employees[this.curEmployees],
  //     done: false,
  //   };
  //   this.curEmployees++;
  //   return returnValue;
  // },

  [Symbol.iterator]: function* employeeGenerator() {
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};

for (const employee of company) {
  console.log(employee);
}

// let employee = company.next();

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

// const it = company.getEmployee();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// Reflect API
const course = {
  title: "Javascript - Hi",
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

console.log(Reflect.has(course, "title"));
Reflect.set(course, "name", "Bob");
Reflect.set(course, "age", 21);

// Reflect.deleteProperty(course, "age");
console.log(course.toString());
console.log(course);

// Proxy API
const courseHandler = {
  get(obj, propertyName) {
    console.log("Name:", propertyName);
    if (propertyName === "name") return;
    return obj[propertyName] || "NOT FOUND";
  },

  set(obj, propertyName, newValue) {
    if (propertyName === "rating") return;
    obj[propertyName] = newValue;
  },
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;
console.log(pCourse.rating);
console.log(pCourse);
