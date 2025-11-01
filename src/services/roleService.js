import axiosAdmin from "./axiosAdmin"

export const roleList = async (page = 1, status = "", keyword = "") => {
  const res = await axiosAdmin.get(`/admin/role/list?search=${keyword}&status=${status}&page=${page}`);
  return res.data;
}