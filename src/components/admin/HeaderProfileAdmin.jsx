import React, { useState } from "react";
import { ChevronDown, User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProfileAdmin() {
  const [popupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();

  const adminData = {
    fullName: "admin01",
    email: "admin01@gmail.com",
    image:
      "https://res.cloudinary.com/dculf3koq/image/upload/v1756288054/igbz2lgjehl0pwt328mt.jpg",
    phone: "0987654321",
    address: "Dong Nai",
    roleName: "admin",
    status: "active",
  };

  return (
    <header className="w-full bg-white flex items-center justify-between px-6 py-4 shadow-md">
      <div className="text-lg font-bold text-black">Clothes Shop Admin</div>

      {/* Avatar + Name + Dropdown */}
      <div className="relative">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setPopupOpen(!popupOpen)}
        >
          <img
            src={adminData.image}
            alt="avatar"
            className="w-8 h-8 rounded-full border"
          />
          <span className="font-medium text-gray-800">
            {adminData.fullName}
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
