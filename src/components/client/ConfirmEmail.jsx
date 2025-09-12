import React, { useState } from "react";

export default function ConfirmEmail({ onConfirmed }) {
  const [email, setEmail] = useState("");

  const handleConfirm = () => {
    if (!email) {
      alert("Vui lòng nhập email để xác nhận!");
      return;
    }
    alert(`Email ${email} đã được xác nhận ✅`);
    onConfirmed();
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

        <input
          type="email"
          placeholder="Enter your OTP email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleConfirm}
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
