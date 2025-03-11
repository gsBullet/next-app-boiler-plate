// const baseURL=  `http://127.0.0.1:5000/api/v1`


// export default baseURL;
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000/api/v1'
});

// Only run on client side
if (typeof window !== 'undefined') {
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `authToken ${token}`; // Fixed authorization header
    }
    return config;
  });
}

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Prevent redirect loop if already on login page
    if (error.response?.status === 401 && window.location.pathname !== '/login') {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;