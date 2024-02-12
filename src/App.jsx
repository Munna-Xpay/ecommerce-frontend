import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Products from './pages/Products';
import Wishlist from './pages/Wishlist';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path='/product/:id' element={<Product />} />
        <Route path='/products' element={<Products />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cartlist' element={<Cart />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
