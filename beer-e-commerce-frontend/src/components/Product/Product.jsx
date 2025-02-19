import React from 'react';
import styles from './Product.module.scss';

const Product = (product) => {
    return (
        <React.Fragment className={styles.productContainer}>
          <p className={styles.productName}>{product.name}</p>
          <img className={styles.productImage} src={product.image} alt={product.name} />
          <React.Fragment className={styles.productPriceTag}>
            <p>${product.price}</p>
            <React.Fragment className={styles.productAddToCart}>+</React.Fragment>
          </React.Fragment>
        </React.Fragment>
    )
}

export default Product