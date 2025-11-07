import { PermissionList } from "@/components/admin/PermissonList";
import { accountAdminPermissionContext, accountClientPermissionContext, categoryPermissionContext, couponPermissionContext, productPermissionContext, rolePermissionContext, stylePermissionContext } from "@/contexts/permission.context";
import { createRole } from "@/services/roleService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";

export const RoleAdd = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: createRole,
    onSuccess: () => {
      toast.success("Tạo vai trò thành công");
      navigate("/admin/role/list");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Tạo vai trò thất bại");
    }
  })
  // Hàm xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const status = formData.get("status");
    const permission = formData.getAll("permission");

    const data = {
      name,
      permission,
      status,
    };
    mutation.mutate(data);
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
          arrayCurrent = {[""]}
        />
        <PermissionList
          title = "Danh sach quyền sản phẩm"
          arrayList = {productPermissionContext}
          arrayCurrent = {[""]}
        />
        <PermissionList
          title = "Danh sach quyền vai trò"
          arrayList = {rolePermissionContext}
          arrayCurrent = {[""]}
        />
        <PermissionList
          title = "Danh sach quyền phong cách"
          arrayList = {stylePermissionContext}
          arrayCurrent = {[""]}
        />
        <PermissionList
          title = "Danh sach quyền mã giảm giá"
          arrayList = {couponPermissionContext}
          arrayCurrent = {[""]}
        />
        <PermissionList
          title = "Danh sach quyền tài khoản quản trị"
          arrayList = {accountAdminPermissionContext}
          arrayCurrent = {[""]}
        />
        <PermissionList
          title = "Danh sach quyền tài khoản người dùng"
          arrayList = {accountClientPermissionContext}
          arrayCurrent = {[""]}
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
