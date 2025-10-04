import axiosAdmin from "./axiosAdmin"

export const getAllStyleStatusActive = async () => {
  try {
    const res = await axiosAdmin.get("/admin/style/list?status=active");
    return res.data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};

export const getAllStyle = async (search = "", status = "", page = 1) => {
  const res = await axiosAdmin.get(`/admin/style/list/?search=${search}&status=${status}&page=${page}`)
  return res;
}