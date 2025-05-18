const http = require("http");

const server = http.createServer((req, res) => {
  let body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    body = Buffer.concat(body).toString();
    const userName = body.split("=")[1];
    console.log(body, "body");
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello there!</h1>");
    res.write(
      `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text" /><button type="submit">Send</button></form>`
    );
    res.end();
  });
});

server.listen(3000, () => {
  console.log("Server running");
});
