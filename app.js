const express = require("express");
const app = express();
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