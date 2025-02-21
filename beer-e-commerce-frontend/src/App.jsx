//Routing
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import ProductListPage from './pages/ProductListPage/ProductListPage'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import { ProductProvider } from "@/context/ProductContext";



function App() {

  return (
    <ProductProvider>
      <Router>
        <Routes>
          {/*Make /products the default route */}
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="products" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App
