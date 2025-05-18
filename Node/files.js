const fs = require("fs");

fs.writeFile("user-data.txt", "username = Max", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Wrote to file!");
  }
});

fs.readFile("user-data.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data.toString());
  }
});
