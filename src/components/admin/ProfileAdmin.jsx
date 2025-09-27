import { profileAdmin } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Save, X } from "lucide-react";

export default function ProfileAdmin() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const { data } = useQuery({
    queryKey: ["profileAdmin"],
    queryFn: profileAdmin,
    retry: false,
  });

  const [previewImage, setPreviewImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formValues = Object.fromEntries(data.entries());

    const file = data.get("image");
    if (file && file.name) {
      formValues.image = file;
    } else {
      formValues.image = previewImage;
    }

    console.log("Cập nhật dữ liệu:", formValues);
  };

  return (
    <main className="max-w-7xl mx-auto mt-8 bg-white rounded-xl shadow-md overflow-hidden border">
      <div className="bg-gray-100 px-4 py-2 font-semibold text-gray-800 border-b">
        Thông tin quản trị viên
      </div>

      <form className="flex p-6 gap-6" onSubmit={handleSubmit}>
        {/* Ảnh trái */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={previewImage || data?.data?.image}
            alt="admin"
            className="w-40 h-48 object-cover border rounded-md cursor-pointer hover:opacity-80"
            onClick={() => fileInputRef.current.click()}
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            ref={fileInputRef}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setPreviewImage(URL.createObjectURL(file));
              }
            }}
            className="hidden"
          />
          <p className="text-xs text-gray-500">Click vào ảnh để đổi</p>
        </div>

        {/* Form bên phải */}
        <div className="grid grid-cols-2 gap-4 text-sm w-full">
          <div>
            <label className="font-semibold block mb-1">Họ tên:</label>
            <input
              type="text"
              name="fullName"
              defaultValue={data?.data?.fullName}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Email:</label>
            <input
              type="email"
              name="email"
              defaultValue={data?.data?.email}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Số điện thoại:</label>
            <input
              type="text"
              name="phone"
              defaultValue={data?.data?.phone}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Địa chỉ:</label>
            <input
              type="text"
              name="address"
              defaultValue={data?.data?.address}
              className="w-full border rounded px-3 py-2"
            />
          </div>

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

          <div>
            <label className="font-semibold block mb-1">Trạng thái:</label>
            <div
              name="status"
              defaultValue={data?.data?.status}
              className="w-full border rounded px-3 py-2"
            >
              <option value={data?.data?.status}>Đang hoạt động</option>
            </div>
          </div>

          <div className="col-span-2 flex justify-end gap-2 mt-4">
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              <Save size={18} />
              Cập nhật
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              <X size={18} />
              Đóng
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
