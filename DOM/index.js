// BASIC
// const h1 = document.getElementById("main-title");
// console.log(h1);

// const li = document.getElementsByClassName("list-item");
// console.log(li);

// const li = document.querySelector(".list-item");
// console.log(li);

// const li = document.querySelectorAll(".list-item");
// console.log(li); // returns Nodelist

// const li = document.querySelector("ul li:first-of-type");
// console.log(li);

//  Select and Manipulate
// const h1 = document.getElementById("main-title");

// h1.textContent = "New Heading";
// h1.style.color = "white";
// h1.style.backgroundColor = "red";

// Accessing Child Nodes
// const ul = document.querySelector("ul");
// console.log(ul.children[2]);

// Sibling Element
// const header = document.querySelector("header");
// console.log(header.nextElementSibling);

// Styling
// const section = document.querySelector("section");
// const button = document.querySelector("button");

// section.style.backgroundColor = "blue";
// section.className = "";

// button.addEventListener("click", () => {
//   if (section.className === "red-bg visible") {
//     section.className = "red-bg invisible";
//   } else section.className = "red-bg visible";
// });

//  createElement
// const newLi = document.createElement("li");
// console.log(newLi);
// newLi.textContent = "Item 4";

// const ul = document.querySelector("ul");

// Insert
// ul.appendChild(newLi);
// ul.prepend(newLi);
// ul.lastElementChild.before(newLi);
// ul.firstElementChild.replaceWith(newLi);

// const secondLi = ul.children[1];
// secondLi.after(newLi);

// REMOVE
const ul = document.querySelector("ul");
// ul.remove();
ul.parentElement.removeChild(ul);
