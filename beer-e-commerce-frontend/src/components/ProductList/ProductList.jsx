import styles from './ProductList.module.scss';

const ProductList = () => {
    return (
      <div className={styles.productList}>
        <p className={styles.saluteUser}>Hi Mr. Michael,</p>

        <p className={styles.salute}>Welcome Back!</p>
      </div>
    );
}

export default ProductList