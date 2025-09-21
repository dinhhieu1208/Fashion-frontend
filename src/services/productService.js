import { axiosClient } from "./axiosClient";

export const getAllProduct = async (price = "", page = 1) => {
  const res = await axiosClient.get(`/client/product/list?search=&price=${price}&quantity=&page=${page}`);
  return res;
}