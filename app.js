const express = require("express");
const data = require("./data");
const app = express();
const PORT = 8000;

app.get("/api/products", (req, res) => {
  //   console.log("I am getting the request");
  return res.json(data);
});
app.put("/get", (req, res) => {
  console.log("I am getting the request");
  return res.json({ message: "2" });
});

app.listen(PORT, () => console.log(`im running on port ${PORT}`));
