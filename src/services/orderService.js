import { axiosClient } from "./axiosClient";

export const createOrder = async (data) => {
  const res = await axiosClient.post("/client/order/create", data);
  return res;
}