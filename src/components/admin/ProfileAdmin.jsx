import { profileAdmin } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileAdmin() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

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

  const { data } = useQuery({
    queryKey: ["profileAdmin"],
    queryFn: profileAdmin,
    retry: false
  });


  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if(data.data) {
      setPreviewImage(data?.data?.image);
    }
  }, [data])

  // Khi chọn file mới
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formValues = Object.fromEntries(data.entries());

    // lấy file ảnh (nếu có)
    const file = data.get("image");
    if (file && file.name) {
      formValues.image = file;
    } else {
      formValues.image = adminData.image;
    }

    console.log("Cập nhật dữ liệu:", formValues);
  };


  return (
    <main className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-md overflow-hidden border">
      {/* Header */}
      <div className="bg-gray-100 px-4 py-2 font-semibold text-gray-800 border-b">
        Thông tin quản trị viên
      </div>

      {/* Nội dung */}
      <div className="flex p-6 gap-6">
        {/* Ảnh trái */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={previewImage}
            alt="admin"
            className="w-40 h-48 object-cover border rounded-md cursor-pointer hover:opacity-80"
            onClick={() => fileInputRef.current.click()} // click ảnh => mở chọn file
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
          <p className="text-xs text-gray-500">Click vào ảnh để đổi</p>
        </div>

        {/* Form bên phải */}
        <form
          className="grid grid-cols-2 gap-4 text-sm w-full"
          onSubmit={handleSubmit}
        >
          {/* Họ tên */}
          <div>
            <label className="font-semibold block mb-1">Họ tên:</label>
            <input
              type="text"
              name="fullName"
              defaultValue={data?.data?.fullName}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold block mb-1">Email:</label>
            <input
              type="email"
              name="email"
              defaultValue={data?.data?.email}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Số điện thoại */}
          <div>
            <label className="font-semibold block mb-1">Số điện thoại:</label>
            <input
              type="text"
              name="phone"
              defaultValue={data?.data?.phone}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Địa chỉ */}
          <div>
            <label className="font-semibold block mb-1">Địa chỉ:</label>
            <input
              type="text"
              name="address"
              defaultValue={data?.data?.address}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Chức vụ */}
          <div>
            <label className="font-semibold block mb-1">Chức vụ:</label>
            <div
              name="roleName"
              defaultValue={data?.data?.roleName}
              className="w-full border rounded px-3 py-2"
            >
              <option value="admin">Admin</option>
            </div>
          </div>

          {/* Trạng thái */}
          <div>
            <label className="font-semibold block mb-1">Trạng thái:</label>
            <select
              name="status"
              defaultValue={data?.data?.status}
              className="w-full border rounded px-3 py-2"
            >
              <option value="active">Đang hoạt động</option>
              <option value="inactive">Ngưng hoạt động</option>
            </select>
          </div>

          {/* Footer */}
          <div className="col-span-2 flex justify-end gap-2 mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Cập nhật
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Đóng
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
