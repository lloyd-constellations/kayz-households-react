const express = require("express");
const products = require("./data/productItems");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to kayzhouseholds API...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product.id == req.params.id);
  res.json(product);
});

app.listen(5000, console.log("Server running on port 5000"));
