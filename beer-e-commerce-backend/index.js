import express from "express";
import products from "./data/products.js"; 
const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/api/products", (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
