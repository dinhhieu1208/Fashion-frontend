import axiosClient from "./axiosClient";
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

export const loginAdmin = async (data) => {
  const res = await axiosAdmin.post("/admin/account/login", data);
  return res;
}