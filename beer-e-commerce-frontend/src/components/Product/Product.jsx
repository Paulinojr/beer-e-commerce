import { useEffect } from "react";
import styles from "./Product.module.scss";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "@/hooks/useProductContext";
import { formatCurrency } from "@/utils/formatCurrency";

const Product = ({ product }) => {
  const { fetchStockPrice, stockPrice } = useProductContext();

  useEffect(() => {
    if (product.skus.length > 0) {
      fetchStockPrice(product.skus[0]?.code);
    }
  }, [product]);


  useEffect(() => {
    console.log(stockPrice)
  }, [stockPrice])

  let navigateTo = useNavigate();
  const handleGoToProductDetail = (product) => {
    navigateTo(`/product/${product.id}`);
  };
  return (
    <div
      className={styles.productContainer}
      onClick={() => handleGoToProductDetail(product)}
    >
      <p className={styles.productTitle}>{product?.brand}</p>
      <img
        className={styles?.productImage}
        src={product?.image}
        alt={product?.name}
      />
      <div className={styles.productPriceTag}>
        <p>{formatCurrency(stockPrice?.price)}</p>
        <div className={styles.productAddToCart}>+</div>
      </div>
    </div>
  );
};

export default Product;
