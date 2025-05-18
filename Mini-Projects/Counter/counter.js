const decreasebtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increasebtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increasebtn.onclick = () => {
  count++;
  countLabel.textContent = count;
};

resetBtn.onclick = () => {
  countLabel.textContent = 0;
};

decreasebtn.onclick = () => {
  count--;
  countLabel.textContent = count;
};
