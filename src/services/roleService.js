import axiosAdmin from "./axiosAdmin"

export const roleList = async (page = 1) => {
  const res = await axiosAdmin.get(`/admin/role/list?search=&status=&page=${page}`);
  return res.data;
}