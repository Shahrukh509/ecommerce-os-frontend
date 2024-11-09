// src/routes/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '@utils/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext); // Assuming `user` is used to check authentication

  if (token) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
