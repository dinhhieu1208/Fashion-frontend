import axiosAdmin from "./axiosAdmin";
import { axiosClient } from "./axiosClient";

export const createOrder = async (data) => {
  const res = await axiosClient.post("/client/order/create", data);
  return res;
}

export const getAllOrder = async (search = "", price = "asc", paymentStatus = "", page = 1) => {
  const res = await axiosAdmin.get(`/admin/order/list?search=${search}&price=${price}&paymentStatus=${paymentStatus}&page=${page}`);
  return res.data
}

export const getAllUserOrder = async (page = 1) => {
  const res = await axiosClient.get(`/client/order/list?page=${page}`);
  return res.data;
}