import axios from 'axios';
import Cookies from 'js-cookie';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Replace with your API base URL
  timeout: 10000, // Request timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the auth token from cookies
    const token = Cookies.get('authToken'); // Replace 'authToken' with your cookie name
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx cause this function to trigger
    return response;
  },
  (error) => {
    // Any status codes outside the range of 2xx cause this function to trigger
    // You can handle errors globally here
    if (error.response && error.response.status === 401) {
      // Example: handle unauthorized access
      console.error('Unauthorized, please log in again.');
      // Redirect to login page or show an alert
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
