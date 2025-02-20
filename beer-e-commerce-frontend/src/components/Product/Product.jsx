import styles from "./Product.module.scss";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  let navigateTo = useNavigate();
  const handleGoToProductDetail = (product) => {
    console.log(product)
    navigateTo(`/product/${product.id}`);
  };
  return (
    <div
      className={styles.productContainer}
      onClick={() => handleGoToProductDetail(product)}
    >
      <p className={styles.productTitle}>{product.name}</p>
      <img
        className={styles.productImage}
        src={product.image}
        alt={product.name}
      />
      <div className={styles.productPriceTag}>
        <p>${product.price}</p>
        <div className={styles.productAddToCart}>+</div>
      </div>
    </div>
  );
};

export default Product;
