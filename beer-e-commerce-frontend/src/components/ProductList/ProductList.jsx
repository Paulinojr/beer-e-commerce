import React from 'react';
import styles from './ProductList.module.scss';
import Product from '@/components/Product/Product';

const ProductList = () => {
    const productExample = {
      name: 'Modelo Especial',
      price: 28.65,
      image: 'https://placehold.co/60X60'
    }
    return (
      <>
        <div className={styles.productList}>
          <p className={styles.saluteUser}>Hi Mr. Michael,</p>
          <p className={styles.salute}>Welcome Back!</p>
          <p className={styles.listHeader}>Our Products</p>
        </div>

        <div className={styles.productListContainer}>
          <Product product={productExample} />
        </div>
      </>
    );
}

export default ProductList