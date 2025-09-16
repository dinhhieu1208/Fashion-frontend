import { profileUser } from "@/services/authService"
import { useQuery } from "@tanstack/react-query"

export const ProtectedRouterClient = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: profileUser,
    retry: false
  });

  if (isLoading) {
    return <div>Đang kiểm tra đăng nhập...</div>;
  }

  if(isError || data.code === "error") {
    return <Navigate to="/client/account/login" replace />;
  }

  return <Outlet />; // cho phép render các route con
}
