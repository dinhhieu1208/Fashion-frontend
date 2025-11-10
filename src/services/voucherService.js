import axiosAdmin from "./axiosAdmin"

export const voucherAdd = async (data) => {
  const res = await axiosAdmin.post("/admin/coupon/create", data);
  return res.data
}


export const voucherList = async () => {
  const res = await axiosAdmin.get("/admin/coupon/list");
  return res.data
}