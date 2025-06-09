import axios from "axios";

const api = axios.create({
  baseURL: 'https://dev-finance-backend.onrender.com',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default api;
