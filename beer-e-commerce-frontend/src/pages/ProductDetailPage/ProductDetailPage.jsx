import styles from "./ProductDetailPage.module.scss";
import ExpandableText from "../../components/Common/ExpandableText/ExpandableText";

const ProductDetailPage = () => {
  return (
    <>
      <div className={styles.productDetailHeader}>
        <a className={styles.goBack}>←</a>
        <p> Detail </p>
        <p className={styles.options}>...</p>
      </div>
      <div className={styles.productDetailImage}>
        <img src="/products/modelo-especial.jpeg" alt="beer"/>
      </div>
      <div className={styles.productDetailContent}>
        <div className={styles.productDetailTitleAndPriceTag}>
          <p>Modelo Especial</p>
          <p className={styles.priceTag}>$26.40</p>
        </div>
        <div className={styles.productDetailOrigin}>
          <p>Origin: Import   |   Stock: 300</p>
        </div>

        <div className={styles.productDetailDescription}>
          <h1>Description</h1>
          <ExpandableText/>
        </div>

        <div className={styles.productDetailDescription}>
          <h1> Size </h1>
          <p>12 - 24oz</p>
          <p>18 - 12oz</p>
          <p> Half Barrel </p>
        </div>

        <div>
          <button>icon</button>

          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
