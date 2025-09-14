import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const [userData, setUserData] = useState({
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone_number: "0123456789",
    gender: "male",
    address: "123 Đường ABC, Quận 1, TP.HCM",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getInitials = (name) =>
    name
      .split(" ")
      .map((w) => w.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-5 px-4">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {getInitials(userData.name)}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Hồ sơ của tôi
                </h2>
                <p className="text-gray-600">{userData.email}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`px-4 py-2 rounded w-full sm:w-auto ${
                isEditing
                  ? "bg-gray-500 hover:bg-gray-600 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              {isEditing ? "Hủy" : "Chỉnh sửa"}
            </button>
          </div>

          {/* Thông tin cá nhân */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  value={userData.phone_number}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Giới tính
                </label>
                <select
                  name="gender"
                  value={userData.gender}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                >
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Địa chỉ
                </label>
                <textarea
                  name="address"
                  value={userData.address}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100 resize-none"
                />
              </div>
            </div>

            {isEditing && (
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  Lưu thay đổi
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Hủy
                </button>
              </div>
            )}
          </div>

          {/* Đổi mật khẩu */}
          <div className="border-t pt-6 mt-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Đổi mật khẩu
              </h3>
              <button
                onClick={() => setShowPasswordForm(!showPasswordForm)}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 w-full sm:w-auto"
              >
                {showPasswordForm ? "Hủy" : "Đổi mật khẩu"}
              </button>
            </div>

            {showPasswordForm && (
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Mật khẩu hiện tại"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="password"
                  placeholder="Mật khẩu mới"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="password"
                  placeholder="Xác nhận mật khẩu mới"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full sm:w-auto">
                  Cập nhật mật khẩu
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
