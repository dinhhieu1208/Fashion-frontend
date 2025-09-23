// src/components/admin/AdminHeader.jsx
import React, { useState } from "react";
import { MoreVertical, Search } from "lucide-react";

export default function ProfileAdmin() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "Nguyễn Văn A",
    email: "admin@shopclothes.com",
    avatar: "/default-avatar.png",
  });

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Đã lưu:", formData);
    setPopupOpen(false);
  };

  return (
    <header className="w-full bg-white flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo / Tên hệ thống */}
      <div className="text-lg font-bold text-black">Clothes Shop Admin</div>

      {/* Ô tìm kiếm */}
      <div className="flex items-center bg-gray-200 px-3 py-1 rounded-lg w-full max-w-md border border-gray-300">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent px-2 w-full text-sm outline-none"
        />
      </div>

      {/* Avatar + Tên + Menu */}
      <div className="relative flex items-center gap-3">
        <img
          src={formData.avatar || "/default-avatar.png"}
          alt="admin"
          className="w-9 h-9 rounded-full cursor-pointer border"
          onClick={() => setPopupOpen(!popupOpen)}
        />
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="font-medium text-gray-700">
            {formData.full_name}
          </span>
          <button
            type="button"
            className="p-1 rounded hover:bg-gray-100"
            onClick={() => setPopupOpen(!popupOpen)}
          >
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Popup Profile */}
        {popupOpen && (
          <div className="absolute right-0 top-14 w-96 bg-white rounded-xl shadow-lg z-50 overflow-hidden animate-fadeIn">
            {/* Header với gradient */}
            <div className="bg-gradient-to-r from-pink-500 to-red-500 p-4 flex flex-col items-center">
              <img
                src={formData.avatar || "/default-avatar.png"}
                alt="admin"
                className="w-20 h-20 rounded-full border-4 border-white"
              />
              <h3 className="text-white font-semibold mt-2 text-lg">
                {formData.full_name}
              </h3>
              <p className="text-pink-200 text-sm">
                Quản trị viên - Shop Quần Áo
              </p>
            </div>

            {/* Body form */}
            <form onSubmit={handleSave} className="flex flex-col gap-3 p-4">
              <input
                type="text"
                placeholder="Họ và tên"
                value={formData.full_name}
                onChange={(e) =>
                  setFormData({ ...formData, full_name: e.target.value })
                }
                className="border px-3 py-2 rounded-lg text-sm w-full border-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border px-3 py-2 rounded-lg text-sm w-full border-gray-300"
              />
              <input
                type="text"
                placeholder="Avatar URL"
                value={formData.avatar}
                onChange={(e) =>
                  setFormData({ ...formData, avatar: e.target.value })
                }
                className="border px-3 py-2 rounded-lg text-sm w-full border-gray-300"
              />

              <div className="flex gap-2 mt-3">
                <button
                  type="submit"
                  className="flex-1 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
                >
                  Lưu
                </button>
                <button
                  type="button"
                  onClick={() => setPopupOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  Đóng
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
