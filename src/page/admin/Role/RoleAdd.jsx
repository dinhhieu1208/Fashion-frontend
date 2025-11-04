import { PermissionList } from "@/components/admin/PermissonList";
import { accountAdminPermissionContext, accountClientPermissionContext, categoryPermissionContext, couponPermissionContext, productPermissionContext, rolePermissionContext, stylePermissionContext } from "@/contexts/permission.context";
import React from "react";

import { toast } from "sonner";

export const RoleAdd = () => {
  // Danh sách quyền (permissions)

  // Hàm xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const status = formData.get("status");
    const permission = formData.getAll("permission");

    const newRole = {
      name,
      permission,
      status,
    };

    console.log("Role được tạo:", newRole);
    toast.success("Tạo vai trò thành công!");
  };

  return (
    <>
      <h1 className="p-4 sm:p-6 mb-4 text-3xl font-bold">Thêm vai trò mới</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-5 p-4 mb-4 bg-white rounded-lg shadow"
      >
        {/* Tên Role */}
        <div>
          <label className="block mb-1 font-medium">Tên vai trò</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-md p-2"
            placeholder="Nhập tên vai trò (VD: admin, staff, ...)"
            required
          />
        </div>

        {/* Danh sách quyền */}
        <PermissionList
          title = "Danh sach quyền danh mục"
          arrayList = {categoryPermissionContext}
        />
        <PermissionList
          title = "Danh sach quyền sản phẩm"
          arrayList = {productPermissionContext}
        />
        <PermissionList
          title = "Danh sach quyền vai trò"
          arrayList = {rolePermissionContext}
        />
        <PermissionList
          title = "Danh sach quyền phong cách"
          arrayList = {stylePermissionContext}
        />
        <PermissionList
          title = "Danh sach quyền mã giảm giá"
          arrayList = {couponPermissionContext}
        />
        <PermissionList
          title = "Danh sach quyền tài khoản quản trị"
          arrayList = {accountAdminPermissionContext}
        />
        <PermissionList
          title = "Danh sach quyền tài khoản người dùng"
          arrayList = {accountClientPermissionContext}
        />

        {/* Trạng thái */}
        <div>
          <label className="block mb-1 font-medium">Trạng thái</label>
          <select name="status" className="w-full border rounded-md p-2">
            <option value="active">Hoạt động</option>
            <option value="inactive">Ngừng hoạt động</option>
          </select>
        </div>

        {/* Nút submit */}
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-600"
        >
          Tạo vai trò
        </button>
      </form>
    </>
  );
};
