import axios from "axios";

const axiosAdmin = axios.create({
  baseURL: "http://localhost:4000/api", // backend API URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

export default axiosAdmin;

export const axiosAdminFormData = axios.create({
  baseURL: "http://localhost:4000/api", // backend API URL: no header
  withCredentials: true,
});