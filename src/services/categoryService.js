import axiosAdmin, { axiosAdminFormData } from "./axiosAdmin";
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


export const getCategoryAdminStatusActive = async () => {
  const res = await axiosAdmin.get(`/admin/category/list?search=&status=active&page=`);
  return res;
}

export const createCategory = async (data) => {
  const res = await axiosAdminFormData.post("/admin/category/create", data);
  return res;
}

export const deleteCategory = async (data) => {
  const res = await axiosAdmin.delete(`/admin/category/delete/${data}`);
  return res;
}
