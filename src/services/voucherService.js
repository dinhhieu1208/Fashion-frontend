import axiosAdmin from "./axiosAdmin"

export const voucherAdd = async (data) => {
  const res = await axiosAdmin.post("/admin/coupon/create", data);
  return res.data
}

export const voucherList = async (keyword = "", status, page = 1) => {
  const res = await axiosAdmin.get(`/admin/coupon/list?search=${keyword}&status=${status}&page=${page}`);
  return res.data
}

export const voucherDelete = async (id) => {
  const res = await axiosAdmin.delete(`/admin/coupon/delete/${id}`);
  return res;
}