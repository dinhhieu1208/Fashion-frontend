import { confirmEmail } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function ConfirmEmailComponent() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: confirmEmail,
    onSuccess: (res) => {
      if (res.data.code === "success") {
        toast.success("Đăng ký thành công !");
        navigate("/login");
      }
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.otp.value);
    if (!e.target.otp.value) {
      toast.warning("Vui lòng điền mã otp trước khi gửi");
    } else {
      mutation.mutate({ otp: e.target.otp.value });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-2">Xác nhận địa chỉ email</h2>
        <p className="text-gray-500 text-sm mb-6">
          Nhấn vào nút bên dưới để xác nhận địa chỉ email của bạn
        </p>

        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your OTP email"
            name="otp"
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition">
            Xác nhận
          </button>
        </form>
      </div>
    </div>
  );
}
