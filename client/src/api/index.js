const axios = require('axios');

const API = axios.create({ baseURL: 'http://localhost:5000/v1' });

// -------------------- Auth apis ---------------------------

export const register = (user) => API.post(`/auth/register`, user);

export const login = (data) => API.post(`/auth/login`, data);

export const forgetPassword = (emailId) => API.put(`/auth/forgetPassword`, emailId);

export const resetPassword = (data) => API.put(`/auth/resetPassword`, data);

// ----------------------------------------------------------