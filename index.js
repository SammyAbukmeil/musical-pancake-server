require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const postRoutes = require("./routes/posts");

app.use("/posts", postRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
