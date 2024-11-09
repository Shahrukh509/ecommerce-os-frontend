// src/components/Login.jsx

import React, { useState, useContext } from 'react';
import AuthContext from '@utils/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy credentials check; replace with your auth logic
    if (username === 'user' && password === 'password') {
      const token = 'dummy-token'; // Replace with actual token from your auth service
      const user = { username }; // Replace with actual user data from your auth service
      login(token, user);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
