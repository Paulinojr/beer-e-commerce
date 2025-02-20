import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [stockPrices, setStockPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchProducts = async () => {
    try {
      console.log("fetching products");
      const response = await fetch("/api/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchStockPrice = async (sku) => {
    try {
      const response = await fetch(`/api/stockprice/${sku}`);
      if (!response.ok) {
        throw new Error("SKU not found");
      }
      const data = await response.json();
      setStockPrices((prev) => ({ ...prev, [sku]: data }));
    } catch (error) {
      setError(error.message);
    }
  };

  const value = {
    products,
    stockPrices,
    loading,
    error,
    fetchProducts,
    fetchStockPrice,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

