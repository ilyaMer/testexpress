const express = require("express");
var cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:4000",
};

app.use(cors());

const port = 3500;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", function (req, res) {
  res.send("POST request to the homepage");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
