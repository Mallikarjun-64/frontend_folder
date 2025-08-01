// Instead of 'http://localhost:5000/api'
export const API_BASE_URL = import.meta.env.VITE_API_URL; 

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  PRODUCTS: '/products',
  CART: '/cart',
  ADMIN: '/admin'
};