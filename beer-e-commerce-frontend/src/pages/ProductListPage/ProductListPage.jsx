import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';
import { ProductProvider } from "@/context/ProductContext";

const ProductListPage = () => {
  return (
    <>
      <ProductProvider>
        <Header />
        <ProductList />
      </ProductProvider>
    </>
  )
}

export default ProductListPage;