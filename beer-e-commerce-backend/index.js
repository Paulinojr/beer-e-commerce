import express from "express";
import products from "./data/products.js"; 
import stockPrice from "./data/stock-price.js";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/stock-price/:sku", (req, res) => {
  try {
    const sku = req.params.sku; 
    const details = stockPrice[sku]; 
    if (details) {
      res.json(details);
    } else {
      res.status(404).json({ message: "SKU not found" });
    }
  } catch (error) {
    console.error("Error fetching stock price:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
