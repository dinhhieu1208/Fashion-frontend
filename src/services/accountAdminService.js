import { axiosAdminFormData } from "./axiosAdmin";
import axiosAdmin from "./axiosAdmin";

export const accountAdminCreate = async (data) => {
  const res = await axiosAdminFormData.post("/admin/account/create", data);
  return res.data;
};
export const accountAdminList = async (
  search = "",
  status = "",
  page = "1"
) => {
  const res = await axiosAdmin.get(
    `/admin/account/list?search=${search}&status=${status}&page=${page}`
  );
  return res;
};
export const deleteAccountAdmin = async (id) => {
  const res = await axiosAdmin.delete(`/admin/account/delete/${id}`);
  return res.data;
};
