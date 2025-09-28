import axiosAdmin from "./axiosAdmin";
import { axiosClient } from "./axiosClient";

export const categoriesClient = async () => {
  const res = await axiosClient.get("/client/category/list");
  return res;
};

export const getAllCategoriesClient = async () => {
  const res = await axiosClient.get("/client/category/getAll");
  return res;
};

export const categoriesAdmin = async (search = "", status = "", page="1") => {
  const res = await axiosAdmin.get(`/admin/category/list?search=${search}&status=${status}&page=${page}`);
  return res;
};
