import styles from "./ProductDetailPage.module.scss";
import ExpandableText from "../../components/Common/ExpandableText/ExpandableText";
import SizeOptions from "../../components/Common/SizeOptions/SizeOptions";

const ProductDetailPage = () => {
  const skus = [
    {
      code: "10167",
      name: "12 - 24oz Cans",
    },
    {
      code: "10166",
      name: "18 - 12oz Cans",
    },
    {
      code: "10170",
      name: "Half Barrel",
    },
  ];
  return (
    <>
      <div className={styles.productDetailHeader}>
        <a className={styles.goBack}>←</a>
        <p> Detail </p>
        <p className={styles.options}>...</p>
      </div>
      <div className={styles.productDetailImage}>
        <img src="/products/modelo-especial.jpeg" alt="beer" />
      </div>
      <div className={styles.productDetailContent}>
        <div className={styles.productDetailTitleAndPriceTag}>
          <p>Modelo Especial</p>
          <p className={styles.priceTag}>$26.40</p>
        </div>
        <div className={styles.productDetailOrigin}>
          <p>Origin: Import | Stock: 300</p>
        </div>

        <div className={styles.productDetailDescription}>
          <h1>Description</h1>
          <ExpandableText />
        </div>

        <div className={styles.productDetailDescription}>
          <h1> Size </h1>
          <SizeOptions options={skus} />
        </div>

        <div className={styles.productDetailButtons}>
          <div className={styles.productOutlinedButton}>
            <img src="/icons/icon-bag.svg" alt="icon" />
          </div>

          <div className={styles.productFilledButton}>Add to cart</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
