import axiosAdmin from "./axiosAdmin"

export const roleList = async (page = 1, status = "", keyword = "") => {
  const res = await axiosAdmin.get(`/admin/role/list?search=${keyword}&status=${status}&page=${page}`);
  return res.data;
}

export const createRole = async (data) => {
  const res = await axiosAdmin.post("/admin/role/create", data);
  return res;
}

export const roleDetail = async (id) => {
  const res = await axiosAdmin.get(`/admin/role/detail/${id}`);
  return res.data;
}

export const roleEdit = async (id, data) => {
  const res = await axiosAdmin.patch(`/admin/role/edit/${id}`, data);
  return res
}

export const deleteRole = async (id) => {
  const res = await axiosAdmin.delete(`/admin/role/delete/${id}`);
  return res
}

export const getAllRole = async () => {
  const res = await axiosAdmin.get("/admin/role/getALL");
  return res.data;
}