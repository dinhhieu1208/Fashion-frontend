import axiosAdmin from "./axiosAdmin";

export const getRevenue = async () => {
  const res = await axiosAdmin.get("/admin/dashboard/total");
  return res;
};
export const postOrders = async (method = "") => {
  const res = await axiosAdmin.post(`/admin/dashboard/order`, { method });
  return res.data;
};
