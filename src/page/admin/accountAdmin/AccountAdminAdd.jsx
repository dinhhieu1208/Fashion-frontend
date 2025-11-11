import { accountAdminCreate } from "@/services/accountAdminService";
import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { toast } from "sonner";

export const AccountAdd = () => {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const mutation = useMutation({
    mutationFn: accountAdminCreate,
    onSuccess: () => {
      toast.success("Tạo tài khoản thành công")
    },
    onError: (error) => {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();

    formData.append("fullName", form.fullName.value);
    formData.append("email", form.email.value);
    formData.append("password", form.password.value);
    formData.append("address", form.address.value);
    formData.append("phone", form.phone.value);
    formData.append("roleId", form.roleId.value);
    formData.append("status", form.status.value);

    // Thêm file nếu có
    if (fileInputRef.current?.files?.[0]) {
      formData.append("image", fileInputRef.current.files[0]);
    }

    console.log([...formData.entries()]); // Kiểm tra nội dung
    mutation.mutate(formData);
  };

  const roleList = [
    { _id: "68aed93ae7b58d8e1356c091", name: "Admin" },
    { _id: "68aed93ae7b58d8e1356c092", name: "Staff" },
    { _id: "68aed93ae7b58d8e1356c093", name: "User" },
  ];

  return (
    <>
      <h1 className="p-4 sm:p-6 mb-4 text-3xl font-bold">Thêm tài khoản mới</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full space-y-5 p-4 mb-4 bg-white rounded-lg shadow"
      >
        {/* Họ và tên */}
        <div>
          <label className="block mb-1 font-medium">Họ và tên</label>
          <input
            type="text"
            name="fullName"
            className="w-full border rounded-md p-2"
            placeholder="Nhập họ và tên"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded-md p-2"
            placeholder="Nhập email"
            required
          />
        </div>

        {/* Mật khẩu */}
        <div>
          <label className="block mb-1 font-medium">Mật khẩu</label>
          <input
            type="password"
            name="password"
            className="w-full border rounded-md p-2"
            placeholder="Nhập mật khẩu"
            required
          />
        </div>

        {/* Địa chỉ */}
        <div>
          <label className="block mb-1 font-medium">Địa chỉ</label>
          <input
            type="text"
            name="address"
            className="w-full border rounded-md p-2"
            placeholder="Nhập địa chỉ"
          />
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="block mb-1 font-medium">Số điện thoại</label>
          <input
            type="text"
            name="phone"
            className="w-full border rounded-md p-2"
            placeholder="Nhập số điện thoại"
          />
        </div>

        {/*  Role  */}
        <div>
          <label className="block mb-1 font-medium">Vai trò</label>
          <select name="roleId" className="w-full border rounded-md p-2">
            <option value="">-- Chọn vai trò --</option>
            {roleList.map((role) => (
              <option key={role._id} value={role._id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {/* Trạng thái */}
        <div>
          <label className="block mb-1 font-medium">Trạng thái</label>
          <select name="status" className="w-full border rounded-md p-2">
            <option value="active">Hoạt động</option>
            <option value="inactive">Ngừng hoạt động</option>
          </select>
        </div>
        {/* Ảnh đại diện */}
        <div>
          <label className="block mb-2 font-medium">Hình ảnh</label>
          <div
            className="flex items-center justify-center border-2 border-dashed rounded-md h-24 w-28 cursor-pointer hover:bg-gray-50 overflow-hidden"
            onClick={() => fileInputRef.current.click()}
          >
            {previewImage ? (
              <img
                src={previewImage}
                alt="preview"
                className="h-full w-full object-cover rounded-md"
              />
            ) : (
              <span className="text-gray-400 text-sm">Upload</span>
            )}
            <input
              type="file"
              name="image"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Nút submit */}
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-600"
        >
          Lưu tài khoản
        </button>
      </form>
    </>
  );
};
