import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:4000/api", // backend API URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const axiosClientFormData = axios.create({
  baseURL: "http://localhost:4000/api", // backend API URL: no header
  withCredentials: true,
});
