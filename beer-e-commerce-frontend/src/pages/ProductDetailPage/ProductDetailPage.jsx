import styles from "./ProductDetailPage.module.scss";

const ProductDetailPage = () => {
  return (
    <>
      <div className={styles.productDetailHeader}>
        <a className={styles.goBack}>←</a>
        <p> Detail </p>
        <p className={styles.options}>...</p>
      </div>
      <div>
        <img />
      </div>
      <div>
        <div>
          <p>Modelo Especial</p>
          <p>$26.40</p>
        </div>
        <div>
          <p>Origin: Import | Stock</p>
        </div>

        <div>
          <h1>Description</h1>
          <p>
            Selling imported beer in the US with nearly 60 million cases in
            annual sales, growing more than 15 million cases over the past 2
            years. A full flavored Mexican lager consistently delivering ...
            <span>Read more</span>
          </p>
        </div>

        <div>
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
