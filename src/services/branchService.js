import { axiosClient } from "./axiosClient"

export const getAllBranchClient = async () => {
  const res = await axiosClient.get("/client/branch/list");
  return res.data;
}