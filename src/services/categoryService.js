import axiosAdmin from "./axiosAdmin";
import { axiosClient } from "./axiosClient";

export const categoriesClient = async () => {
  const res = await axiosClient.get("/client/category/list");
  return res;
};
export const categoriesAdmin = async () => {
  const res = await axiosAdmin.get("/admin/category/list");
  return res;
};
