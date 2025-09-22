import { axiosClient } from "./axiosClient";

export const getAllProduct = async (price = "", page = 1) => {
  const res = await axiosClient.get(`/client/product/list?search=&price=${price}&quantity=&page=${page}`);
  return res;
}

export const getOneProduct = async (id) => {
  const res = await axiosClient.get(`/client/product/detail/${id}`);
  console.log(res.data);
  return res.data;
}