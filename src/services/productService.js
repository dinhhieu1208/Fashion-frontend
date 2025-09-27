import { axiosClient } from "./axiosClient";

export const getAllProduct = async (keyword = "", price = "", categoryId = "", page = 1) => {
  const res = await axiosClient.get(`/client/product/list?search=${keyword}&price=${price}&categoryId=${categoryId}&page=${page}`);
  return res;
}

export const getOneProduct = async (id) => {
  const res = await axiosClient.get(`/client/product/detail/${id}`);
  console.log(res.data);
  return res.data;
}