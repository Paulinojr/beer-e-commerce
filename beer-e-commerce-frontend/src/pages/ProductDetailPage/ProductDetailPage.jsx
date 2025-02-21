import { useState, useEffect } from "react";
import styles from "./ProductDetailPage.module.scss";
import ExpandableText from "@/components/Common/ExpandableText/ExpandableText";
import SizeOptions from "@/components/Common/SizeOptions/SizeOptions";
import { useProductContext } from "@/hooks/useProductContext";
import { useLocation } from "react-router-dom";
import { formatCurrency } from "@/utils/formatCurrency";

const ProductDetailPage = () => {
  const [skus, setSkus] = useState([])
  const { fetchStockPrice, stockPrice, selectedProduct} = useProductContext();
  
  const { state } = useLocation();
  const { product } = state;

  useEffect(() => {
    const fetchSkusData = async () => {
      if (product?.skus.length > 0) {
        const skusData = await Promise.all(
          product.skus.map(async (sku) => {
            await fetchStockPrice(sku.code);
            return {
              code: sku.code,
              name: sku.name,
              stock: stockPrice.stock,
              price: stockPrice.price,
            };
          })
        );
        setSkus(skusData);
      }
    };

    fetchSkusData();
    const intervalId = setInterval(fetchSkusData, 5000);
    return () => clearInterval(intervalId);
  }, [product]);



  return (
    <>
      <div className={styles.productDetailHeader}>
        <a className={styles.goBack} onClick={() => window.history.back()}>
          <img src="/icons/icon-back.svg" alt="go back" />
        </a>
        <p> Detail </p>
        <p className={styles.options}>
          <img
            src="/icons/icon-dots.svg"
            alt="options"
            onClick={() => window.alert("Settings to be implemented")}
          />
        </p>
      </div>
      <div className={styles.productDetailImage}>
        <img src={product?.image} alt={product?.brand} />
      </div>
      <div className={styles.productDetailContent}>
        <div className={styles.productDetailTitleAndPriceTag}>
          <p>{product?.brand}</p>
          <p className={styles.priceTag}>
            {formatCurrency(selectedProduct?.price)}
          </p>
        </div>
        <div className={styles.productDetailOrigin}>
          <p>Origin: Import | Stock: {selectedProduct?.stock}</p>
        </div>

        <div className={styles.productDetailDescription}>
          <h1>Description</h1>
          <ExpandableText text={product?.information} />
        </div>

        <div className={styles.productDetailDescription}>
          <h1> Size </h1>
          <SizeOptions options={skus} />
        </div>

        <div className={styles.productDetailButtons}>
          <div
            className={styles.productOutlinedButton}
            onClick={() => window.alert("Added to favorites!")}
          >
            <img src="/icons/icon-bag.svg" alt="icon" />
          </div>

          <div
            className={styles.productFilledButton}
            onClick={() => window.alert("Product added to cart!")}
          >
            Add to cart
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
