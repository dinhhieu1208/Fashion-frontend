import { axiosClient, axiosClientFormData } from "./axiosClient";
import axiosAdmin from "./axiosAdmin";
export const registerUser = async (userInfor) => {
  const data = userInfor
  const res = await axiosClient.post("/client/account/register", data);
  return res;
}

export const confirmEmail = async (otp) => {
  const res = await axiosClient.post("/client/account/confirm/email", otp);
  return res;
};

export const loginService = async (data) => {
  const res = await axiosClient.post("/client/account/login", data);
  return res;
}

export const profileUser = async () => {
  const res = await axiosClient.get("/client/account/profile");
  return res.data;
}

export const profileUserEdit = async (data) => {
  const res = await axiosClientFormData.patch("/client/account/profile/edit", data);
  return res;
}

export const logoutClient = async () => {
  const res = axiosClient.post("/client/account/logout");
  return res
}

export const loginAdmin = async (data) => {
  const res = await axiosAdmin.post("/admin/account/login", data);
  return res;
}

export const profileAdmin = async () => {
  const res = await axiosAdmin.get("/admin/account/profile");
  return res.data;
};

export const profileAdminEdit = async (data) => {
  const res = await axiosAdmin.patch("/admin/account/profile/edit", data)
  return res.data;
};

export const adminLogout = async () => {
  const res = await axiosAdmin.post("/admin/account/logout");
  return res;
}