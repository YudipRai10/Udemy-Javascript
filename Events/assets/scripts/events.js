const btn = document.querySelector("button");
const div = document.querySelector("div");

div.addEventListener("click", () => {
  console.log("Div was clicked");
});

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Button was clicked");
});

// btn.addEventListener("mouseenter", (e) => {
//   console.log(e);
// });

// window.addEventListener("scroll", (e) => {
//   console.log(e);
// });

const listItems = document.querySelectorAll("li");
const ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
  // e.target.classList.toggle("highlight");
  e.target.closest("li").classList.toggle("highlight");
});

// listItems.forEach((listItem) => {
//   listItem.addEventListener("click", (e) => {
//     e.target.classList.toggle("highlight");
//   });
// });
