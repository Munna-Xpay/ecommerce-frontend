import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Products from './pages/Products';
import Wishlist from './pages/Wishlist';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Compare from './pages/Compare';
import OrderCompleted from './pages/OrderCompleted';
import Account from './pages/Account';
import AccountPersonal from './pages/AccountPersonal';
import AccountOrders from './pages/AccountOrders';
import AccountWishlist from './pages/AccountWishlist';
import AccountVouchers from './pages/AccountVouchers';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Login register />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/products' element={<Products />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cartlist' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='/order/completed' element={<OrderCompleted />} />
        <Route path='/account' element={<Account />} >
          <Route path='personal' element={<AccountPersonal />} />
          <Route path='orders' element={<AccountOrders />} />
          <Route path='wishlist' element={<AccountWishlist />} />
          <Route path='vouchers' element={<AccountVouchers />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
