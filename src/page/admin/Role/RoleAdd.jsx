import React from "react";

import { toast } from "sonner";

export const RoleAdd = () => {
  // Danh sách quyền (permissions)
  const permissions = [
    "category-create",
    "category-edit",
    "category-list",
    "category-delete",
    "category-detail",
    "category-trash-list",
    "category-trash-restore",
    "category-trash-delete",
    "role-create",
    "role-list",
    "role-detail",
    "role-edit",
    "role-delete",
    "role-trash-list",
    "role-trash-restore",
    "role-trash-delete",
    "style-create",
    "style-list",
    "style-detail",
    "style-edit",
    "style-delete",
    "style-trash-list",
    "style-trash-restore",
    "style-trash-delete",
    "coupon-create",
    "coupon-list",
    "coupon-detail",
    "coupon-edit",
    "coupon-delete",
    "product-create",
    "product-list",
    "product-detail",
    "product-edit",
    "product-delete",
    "product-trash-list",
    "product-trash-restore",
    "product-trash-delete",
    "accountAdmin-create",
    "accountAdmin-list",
    "accountAdmin-detail",
    "accountAdmin-edit",
    "accountAdmin-delete",
    "accountAdmin-trash-list",
    "accountAdmin-trash-restore",
    "accountAdmin-trash-delete",
    "accountClient-list",
  ];

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
        <div>
          <label className="block mb-2 font-medium">Danh sách quyền</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[400px] overflow-y-auto border rounded-md p-3">
            {permissions.map((perm) => (
              <label key={perm} className="flex items-center text-sm">
                <input
                  type="checkbox"
                  name="permission"
                  value={perm}
                  className="mr-2"
                />
                {perm}
              </label>
            ))}
          </div>
        </div>

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
