import axiosAdmin from "./axiosAdmin"

export const voucherAdd = async (data) => {
  const res = await axiosAdmin.post("/admin/coupon/create", data);
  return res.data
}