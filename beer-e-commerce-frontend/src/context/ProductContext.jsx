import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [stockPrice, setStockPrice] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const fetchProducts = async () => {
    try {
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
      const response = await fetch(`/api/stock-price/${sku}`);
      if (!response.ok) {
        throw new Error("SKU not found");
      }
      const data = await response.json();
      setStockPrice(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const value = {
    products,
    stockPrice,
    loading,
    error,
    fetchProducts,
    fetchStockPrice,
    selectedProduct,
    setSelectedProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

