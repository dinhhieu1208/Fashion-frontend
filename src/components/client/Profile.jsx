import React, { useState } from "react";
import ChangePassword from "./ChangePassword";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    fullName: "Lam Thanh Duy",
    email: "fititah236@certve.com",
    phone: "0987654321",
    address: "TP.HCM",
    birthDay: "",
    bankCode: "098658432169",
    image:
      "https://res.cloudinary.com/dculf3koq/image/upload/v1757575266/g93n7onk4lyrzwmkf9.jpg",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Dữ liệu lưu:", userData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-gray-50">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Thông tin cá nhân</h2>

        {/* Avatar + Info */}
        <div className="flex items-center gap-4 mb-6">
          {userData.image ? (
            <img
              src={userData.image}
              alt="Avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold">
              {userData.fullName.charAt(0)}
            </div>
          )}
          <div>
            <p className="text-lg font-semibold">{userData.fullName}</p>
            <p className="text-gray-500">{userData.email}</p>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Họ và tên *
            </label>
            <input
              type="text"
              name="fullName"
              value={userData.fullName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số điện thoại
            </label>
            <input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Địa chỉ
            </label>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ngày sinh
            </label>
            <input
              type="date"
              name="birthDay"
              value={userData.birthDay}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mã ngân hàng
            </label>
            <input
              type="text"
              name="bankCode"
              value={userData.bankCode}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
            />
          </div>
        </div>

        {/* Đổi mật khẩu */}
        <div className="border-t pt-6 mt-6">
          <button
            onClick={() => navigate("/ChangePassword")}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Đổi mật khẩu
          </button>
        </div>

        {/* Buttons chỉnh sửa */}
        <div className="flex justify-start gap-4 mt-8">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                Hủy
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Lưu thay đổi
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Chỉnh sửa
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
