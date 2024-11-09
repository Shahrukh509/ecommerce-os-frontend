// src/routes/AppRoute.jsx
import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContext from '@utils/AuthContext';
import Home from '@pages/Home';
import Cart from '@pages/Cart';
import ProductList from '@pages/ProductList';
import ProductDetail from '@pages/ProductDetail';
import Checkout from '@pages/Checkout';
import Contact from '@pages/Conatct';



const AppRoute = () => {
  const { token } = useContext(AuthContext);
  console.log(token,'ye ha token');

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {token && <Route path="/cart" element={<Cart />} />}
      <Route path='/product-list' element={<ProductList/>}/>
      <Route path='/product-detail/:id' element={<ProductDetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
  );
};

export default AppRoute;
