import styles from "./ProductList.module.scss";
import Product from "@/components/Product/Product";
import { useProductContext } from "@/hooks/useProductContext";
import { useEffect } from "react";

const ProductList = () => {
  const { fetchProducts, products, loading, error } = useProductContext();

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }
  , [error]);

  useEffect(() => {
    fetchProducts();
  }
  , []);

  return (
    <div className={styles.productList}>
      <p className={styles.saluteUser}>Hi Mr. Michael,</p>
      <p className={styles.salute}>Welcome Back!</p>
      <p className={styles.listHeader}>Our Products</p>
      {!loading && products.length === 0 && (
        <p>No products found</p>
      )}
      {loading && <p>Loading...</p>}
      <div className={styles.productListContainer}>
        { products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
