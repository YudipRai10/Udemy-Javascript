const express = require("express");
const bodyParser = require("body-parser");

const locationRoutes = require("./routes/location.route.js");

const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

// Middleware to parse form data from POST requests
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(locationRoutes);

// Set content type for all responses
// app.use((req, res, next) => {
//   res.setHeader("Content-Type", "text/html");
//   next();
// });

// GET request - show the form
// app.get("/", (req, res) => {
//   res.render("index", {
//     user: username,
//   });
// });

// POST request - show greeting with submitted name
// app.post("/", (req, res) => {
//   const userName = req.body.username || "Unknown User";
//   res.send(`
//     <h1>Hi ${userName}</h1>
//     <form method="POST" action="/">
//       <input name="username" type="text" />
//       <button type="submit">Send</button>
//     </form>
//   `);
// });

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
