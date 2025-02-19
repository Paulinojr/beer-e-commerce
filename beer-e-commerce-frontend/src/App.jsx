//Routing
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import ProductListPage from './pages/ProductListPage/ProductListPage'

//Styles
import './styles/global.scss'

function App() {

  return (
    <Router>
      <Routes>
        {/*Make /products the default route */}
        <Route path="/" element={<Navigate to="/products" />} />

        <Route path="products" element={<ProductListPage />} />
      </Routes>
    </Router>
  )
}

export default App
