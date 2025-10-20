import { profileUser } from "@/services/authService"
import { useQuery } from "@tanstack/react-query"
import { Navigate } from "react-router-dom";

export const ProtectedRouterClient = ({children}) => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: profileUser,
    retry: false
  });

  if (isLoading) {
    return <div>Đang kiểm tra đăng nhập...</div>;
  }

  if(isError || data.code === "error") {
    return <Navigate to="/login" replace />;
  }

  return children // cho phép render các route con
}
