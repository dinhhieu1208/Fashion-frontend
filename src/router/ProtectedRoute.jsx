import { Outlet, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { profileAdmin } from "@/services/authService";

export const ProtectedRoute = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: profileAdmin,
    retry: false, // không auto retry khi lỗi (ví dụ 401)
  });

  if (isLoading) {
    return <div>Đang kiểm tra đăng nhập...</div>;
  }

  if (isError || data.code === "error") {
    return <Navigate to="/admin/login" replace />;
  };

  return <Outlet />; // cho phép render các route con
};
