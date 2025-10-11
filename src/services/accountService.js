import axiosAdmin from "./axiosAdmin"

export const getAllClientAccount = async (search = "", status = "", page = 1) => {
  const res = await axiosAdmin.get(`/admin/account/user/list?search=${search}&status=${status}&page=${page}`);
  return res;
};