const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const modalContainer = document.querySelector(".modal-container");

modalBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});

modal.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});

modalContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});
