import axios from 'axios';

// ✅ Detect environment and set API base URL
const API_BASE_URL =
  import.meta.env.VITE_API_URL || 
  (window.location.hostname === 'localhost'
    ? 'http://localhost:5000/api' // Local backend
    : 'https://mallus-app.onrender.com'); // Render deployment

// ✅ Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // allows cookies if used in backend
});

// ✅ Add token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// =======================
// AUTH APIs
// =======================
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  signup: (userData) => api.post('/auth/signup', userData),
};

// =======================
// PRODUCT APIs
// =======================
export const productAPI = {
  getProducts: () => api.get('/admin/getproduct'),
  addProduct: (productData) => api.post('/admin/addproduct', productData),
  deleteProduct: (id) => api.delete(`/admin/deleteproduct/${id}`),
  updateProduct: (id, productData) => api.put(`/admin/updateproduct/${id}`, productData),
};

// =======================
// CART APIs
// =======================
export const cartAPI = {
  getCart: () => api.get('/product'),
  addToCart: (productId, quantity = 1) =>
    api.post('/product/addcart', { productId, quantity }),
  removeFromCart: (productId) =>
    api.post('/product/removecart', { productId }),
};

export default api;
