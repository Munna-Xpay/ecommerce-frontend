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
import Checkout from './pages/Checkout';
import Compare from './pages/Compare';
import OrderCompleted from './pages/OrderCompleted';
import Account from './pages/Account';
import AccountPersonal from './pages/AccountPersonal';
import AccountOrders from './pages/AccountOrders';
import AccountWishlist from './pages/AccountWishlist';
import AccountVouchers from './pages/AccountVouchers';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import Varification from './pages/Varification';
import BuyNow from './pages/BuyNow';
import { useSelector } from 'react-redux';
import CategoryProductItems from './pages/CategoryProductItems';
import { BASE_URL } from './redux/baseUrl';
import { useEffect, useState } from 'react';
import { io } from "socket.io-client";

function App() {
  const user = useSelector(state => state.userReducer.user)
  const socket = useSelector(state => state.socketReducer.socket)
  console.log(socket)
  console.log(user)

  useEffect(() => {
    if (user) {
      socket && socket?.emit("sendClient", user._id);
    }
  }, [socket, user])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Login register />} />
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:category' element={<CategoryProductItems />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cartlist' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/buynow/:id' element={<BuyNow socket={socket} />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='/order/completed' element={<OrderCompleted />} />
        <Route path='/account' element={<Account />} >
          <Route path='personal' element={<AccountPersonal />} />
          <Route path='orders' element={<AccountOrders />} />
          <Route path='wishlist' element={<AccountWishlist />} />
          <Route path='vouchers' element={<AccountVouchers />} />
        </Route>
        <Route path='/verify' element={<Varification />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
