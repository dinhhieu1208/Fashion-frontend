import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { profileUser } from "@/services/authService";

const Profile = () => {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formValues, setFormValues] = useState({});

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: profileUser,
    retry: false,
  });

  // Khi có data thì set vào formValues
  useEffect(() => {
    if (data?.data) {
      setFormValues(data.data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Đang kiểm tra đăng nhập...</div>;
  }

  if (isError || data.code === "error") {
    return <Navigate to="/login" replace />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append("fullName", formValues.fullName || "");
    formData.append("email", formValues.email || "");
    formData.append("phone", formValues.phone || "");
    formData.append("address", formValues.address || "");
    formData.append("birthDay", formValues.birthDay || "");
    formData.append("bankCode", formValues.bankCode || "");
    if (selectedFile) {
      formData.append("image", selectedFile);
    };
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-gray-50">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Thông tin cá nhân</h2>

        {/* Avatar */}
        <div className="flex items-center gap-4 mb-6">
          <label htmlFor="imageUpload" className="cursor-pointer">
            <img
              src={previewImage || formValues.image}
              alt="Avatar"
              className="w-16 h-16 rounded-full object-cover border"
            />
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>

          <div>
            <p className="text-lg font-semibold">{formValues.fullName}</p>
            <p className="text-gray-500">{formValues.email}</p>
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
              value={formValues.fullName || ""}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formValues.email || ""}
              onChange={handleInputChange} // nếu muốn cho sửa
              // disabled // nếu không cho sửa thì mở dòng này và bỏ onChange
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số điện thoại
            </label>
            <input
              type="tel"
              name="phone"
              value={formValues.phone || ""}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Địa chỉ
            </label>
            <input
              type="text"
              name="address"
              value={formValues.address || ""}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ngày sinh
            </label>
            <input
              type="date"
              name="birthDay"
              value={formValues.birthDay || ""}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mã ngân hàng
            </label>
            <input
              type="text"
              name="bankCode"
              value={formValues.bankCode || ""}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="border-t pt-6 mt-6 flex justify-start gap-4">
          <button
            onClick={() => navigate("/ChangePassword")}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Đổi mật khẩu
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Chỉnh sửa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;