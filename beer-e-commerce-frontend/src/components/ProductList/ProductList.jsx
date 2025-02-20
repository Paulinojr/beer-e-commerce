import styles from "./ProductList.module.scss";
import Product from "@/components/Product/Product";

const ProductList = () => {
  const productExample = {
    name: "Modelo Especial",
    price: 28.65,
    image: "https://placehold.co/120X120",
    key: "1-name",
    id: 1,
  };
  return (
    <div className={styles.productList}>
      <p className={styles.saluteUser}>Hi Mr. Michael,</p>
      <p className={styles.salute}>Welcome Back!</p>
      <p className={styles.listHeader}>Our Products</p>
      <div className={styles.productListContainer}>
        <Product key={productExample.key} product={productExample} />
        <Product key={productExample.key} product={productExample} />
        <Product key={productExample.key} product={productExample} />
        <Product key={productExample.key} product={productExample} />
        <Product key={productExample.key} product={productExample} />
        <Product key={productExample.key} product={productExample} />
        <Product key={productExample.key} product={productExample} />
        <Product key={productExample.key} product={productExample} />
        <Product key={productExample.key} product={productExample} />
        <Product key={productExample.key} product={productExample} />
        <Product key={productExample.key} product={productExample} />
        <Product key={productExample.key} product={productExample} />
      </div>
    </div>
  );
};

export default ProductList;
