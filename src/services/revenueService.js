import axiosAdmin from "./axiosAdmin";

export const getRevenue = async () => {
  const res = await axiosAdmin.get("/admin/dashboard/total");
  return res;
};
