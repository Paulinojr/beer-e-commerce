import React from 'react';
import styles from './Product.module.scss';

const Product = ({product}) => {
    return (
      <div className={styles.productContainer}>
        <p className={styles.productName}>{product.name}</p>
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
}


export default Product;
