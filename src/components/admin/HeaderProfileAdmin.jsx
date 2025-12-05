import React, { useState } from "react";
import { ChevronDown, User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { profileAdmin } from "@/services/authService";

export default function ProfileAdmin() {
  const [popupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["profileAdmin"],
    queryFn: profileAdmin,
    retry: false,
  });

  return (
    <header className="w-full bg-white flex items-center justify-between px-6 py-4 shadow-md">
      <div className="text-lg font-bold text-black">
        Quản trị cửa hàng thời trang
      </div>

      {/* Avatar + Name + Dropdown */}
      <div className="relative">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setPopupOpen(!popupOpen)}
        >
          <img
            src={data?.data?.image}
            alt="avatar"
            className="w-8 h-8 rounded-full border"
          />
          <span className="font-medium text-gray-800">
            {data?.data.fullName}
          </span>

          <ChevronDown
            className={`w-4 h-4 text-gray-600 transform transition-transform duration-300 ${
              popupOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        {popupOpen && (
          <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg border overflow-hidden z-50">
            <ul className="flex flex-col">
              <li
                onClick={() => {
                  navigate("/admin/profile");
                  setPopupOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
              >
                <User className="w-5 h-5 text-gray-600" />
                <span>Thông tin cá nhân</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
