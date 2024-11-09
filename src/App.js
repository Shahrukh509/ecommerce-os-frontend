// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import MainLayout from '@components/MainLayout';
import ProtectedRoute from '@routes/ProtectedRoute';
import AppRoute from '@routes/AppRoute';
import { AuthProvider } from '@utils/AuthContext';
import Login from '@auth/Login';

function App() {
  return (
    <AuthProvider>
       <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <MainLayout>
                <AppRoute />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route 
      path="/login" 
      element={<Login />} />
      </Routes>
    </Router>

    </AuthProvider>
   
  );
}

export default App;
