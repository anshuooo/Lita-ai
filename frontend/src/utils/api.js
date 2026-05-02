import axios from 'axios';

/**
 * FIXED: Centralized Axios Instance
 * - baseURL: Points to the backend API root
 * - timeout: 5000ms to avoid hanging requests
 * - headers: Ensures JSON is sent and accepted
 */
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request Interceptor: Attach Auth Token if exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Global Error Handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error('Network Error: Please check if the backend server is running on port 5000');
    } else if (error.response.status === 404) {
      console.error('Route Not Found: Please verify the backend route exists');
    }
    return Promise.reject(error);
  }
);

export default api;
