//Routing
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import ProductListPage from './pages/ProductListPage/ProductListPage'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'


function App() {

  return (
    <Router>
      <Routes>
        {/*Make /products the default route */}
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="products" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
