const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello from Server!");
});

app.listen(5000, () => {
  console.log("Server running on PORT: 5000");
});
