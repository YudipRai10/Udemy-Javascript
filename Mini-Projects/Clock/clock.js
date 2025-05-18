function clock() {
  const date = new Date();
  let hours = date.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, 0);
  const seconds = date.getSeconds().toString().padStart(2, 0);
  const currentTime = `${hours}:${minutes}:${seconds} ${meridiem}`;
  document.getElementById("clock").textContent = currentTime;
}

clock();
setInterval(clock, 1000);
