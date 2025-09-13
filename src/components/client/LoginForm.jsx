import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Google from "../../assets/images/logo_google.png";
import Facebook from "../../assets/images/logo_facebook.png";
import Twitter from "../../assets/images/logo_Twitter.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { loginService } from "@/services/authService";
import { toast } from "sonner";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: loginService,
    onSuccess: (res) => {
      toast.success(res.data.message);
      localStorage.setItem("isLogin", true);
      navigate("/")
    },
    onError: (error) => {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  })

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password) {
      toast.warning("Vui lòng nhập đầy đủ thông tin")
    } else {
      const data = {
        email: email,
        password: password
      };
      mutation.mutate(data);
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2F0F1] px-4 ">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Login to Your Account
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Đăng nhập để tiếp tục khám phá xu hướng thời trang mới nhất
          </p>
        </div>
        <form className="space-y-4" onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
              aria-label="Toggle password"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-500 transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-sm text-gray-500">Or login with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
            <img src={Google} alt="Google" className="w-6 h-6" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
            <img src={Facebook} alt="Facebook" className="w-6 h-6" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
            <img src={Twitter} alt="Twitter" className="w-6 h-6" />
          </button>
        </div>

        {/* Register link */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-medium hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
