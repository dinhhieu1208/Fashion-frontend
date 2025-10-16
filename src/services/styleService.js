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
};

export const createStyle = async (data) => {
  const res = await axiosAdmin.post(`/admin/style/create`, data);
  return res;
};

export const styleDetail = async (id) => {
  const res = await axiosAdmin.get(`/admin/style/detail/${id}`);
  return res.data;
}

export const styleEdit = async (id, data) => {
  const res = await axiosAdmin.patch(`/admin/style/edit/${id}`, data);
  return res.data;
}

export const deleteStyle = async (id) => {
  const res = await axiosAdmin.delete(`/admin/style/delete/${id}`);
  return res
}