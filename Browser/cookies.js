const storeButton = document.getElementById("store-btn");
const retreiveButton = document.getElementById("retrieve-btn");

storeButton.addEventListener("click", () => {
  const userId = "u12";
  const user = { name: "Max", age: 30 };
  document.cookie = `uid=${userId}`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retreiveButton.addEventListener("click", () => {
  //   console.log(document.cookie);
  const cookieData = document.cookie.split(",");
  const data = cookieData.map((i) => i.trim());
  console.log(data);
});
