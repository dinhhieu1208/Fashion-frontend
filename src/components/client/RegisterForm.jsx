import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../assets/images/logo_google.png";
import Facebook from "../../assets/images/logo_facebook.png";
import Twitter from "../../assets/images/logo_Twitter.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ConfirmEmail from "./ConfirmEmail";

export default function RegisterForm() {
  const [form, setForm] = useState({ full_name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
    setIsRegistered(true);
  };

  if (isRegistered) {
    return <ConfirmEmail onConfirmed={() => navigate("/login")} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2F0F1] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-500 text-sm mt-2">
            Bạn chỉ còn một bước nữa để trở thành thành viên của Fashion Store
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={onSubmit}>
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={form.full_name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
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
            Create Account
          </button>
        </form>

        <div className="flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-sm text-gray-500">Or sign up with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Register */}
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

        {/* Login link */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
