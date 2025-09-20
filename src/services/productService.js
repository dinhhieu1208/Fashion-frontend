import { axiosClient } from "./axiosClient";

export const getAllProduct = async (price = "") => {
  const res = await axiosClient.get(`/client/product/list?search=&price=${price}&quantity=&page=1`);
  return res;
}