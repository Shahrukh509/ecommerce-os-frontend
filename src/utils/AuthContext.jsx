// src/context/AuthContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import AuthService from '@services/AuthService';
import  axiosInstance  from '@utils/axiosInstance';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cart,setCart] = useState({});
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    const currentUser = AuthService.getUser();
    const gettoken = AuthService.getToken();
    setUser(currentUser);
    setToken(gettoken);
  
    const fetchData = async () => {
      try {
        const [cartResponse, wishListResponse] = await Promise.all([
          axiosInstance.get('/user-cart'),
          axiosInstance.get('/user-wish-list'),
        ]);
  
        if (cartResponse.data.success) {
          setCart(cartResponse.data.data);
        }
  
        if (wishListResponse.data.success) {
          setWishlist(wishListResponse.data.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const login = (token, user) => {
    AuthService.setToken(token);
    AuthService.setUser(user);
    setUser(user);
    setToken(token);
  };

  const logout = () => {
    AuthService.removeToken();
    AuthService.removeUser();
    setUser(null);
    setToken(null);
  };


  const updateCart = (newCart) => {
    setCart(newCart);
  };

  const updateWishlist = (wishlist) => {
    setWishlist(wishlist);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, token,cart,updateCart,updateWishlist,wishlist }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
