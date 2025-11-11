import { axiosAdminFormData } from "./axiosAdmin"

export const accountAdminCreate = async (data) => {
  const res = await axiosAdminFormData.post("/admin/account/create", data);
  return res.data;
}