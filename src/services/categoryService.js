import { axiosClient } from "./axiosClient";

export const categoriesClient = async () => {
  const res = await axiosClient.get("/client/category/list");
  return res;
}