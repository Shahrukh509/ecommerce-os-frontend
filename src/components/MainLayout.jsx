// src/components/layouts/MainLayout.jsx

import React from 'react';
import Header from '@components/layouts/Header';
import Footer from '@components/layouts/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
