import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // adapte si besoin
});

// Ajoute le token à chaque requête si présent
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
