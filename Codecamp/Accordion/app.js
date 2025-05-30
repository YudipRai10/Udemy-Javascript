// Traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

// Using selectors inside the element

const questions = document.querySelectorAll(".question");


questions.forEach((qns) => {
  const btn = qns.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== qns) {
        item.classList.remove("show-text");
      }
    });

    qns.classList.toggle("show-text");
  });
});
