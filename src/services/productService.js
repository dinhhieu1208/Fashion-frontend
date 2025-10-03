import axiosAdmin, { axiosAdminFormData } from "./axiosAdmin";
import { axiosClient } from "./axiosClient";

export const getAllProduct = async (
  keyword = "",
  price = "",
  categoryId = "",
  page = 1
) => {
  const res = await axiosClient.get(
    `/client/product/list?search=${keyword}&price=${price}&categoryId=${categoryId}&page=${page}`
  );
  return res;
};

export const getOneProduct = async (id) => {
  const res = await axiosClient.get(`/client/product/detail/${id}`);
  console.log(res.data);
  return res.data;
};

export const productAdmin = async (search = "", status = "", page = "1") => {
  const res = await axiosAdmin.get(
    `/admin/product/list?search=${search}&status=${status}&page=${page}`
  );
  return res;
};

export const createProduct = async (data) => {
  const res = await axiosAdminFormData.post("/admin/product/create", data);
  return res;
}

export const deleteProduct = async (id) => {
  const res = await axiosAdmin.delete(`/admin/product/delete/${id}`);
  return res;
}