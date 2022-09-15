const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.listen(3333, () => {
  console.log("===================================");
  console.log("== SER6VER RUNNING LIKE A ROCKET! ==");
  console.log("===================================");
});
