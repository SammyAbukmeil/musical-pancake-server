require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ message: "Test" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
