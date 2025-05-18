const storeButton = document.getElementById("store-btn");
const retreiveButton = document.getElementById("retrieve-btn");

const userId = "u123";
const user = {
  name: "Max",
  age: 30,
  hobbies: ["Cooking", "Running"],
};

storeButton.addEventListener("click", () => {
  localStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});

retreiveButton.addEventListener("click", () => {
  const extractedId = JSON.parse(localStorage.getItem("user"));
  if (extractedId) {
    console.log("Got the id -", extractedId);
  } else {
    console.log("Could not find id");
  }
});
