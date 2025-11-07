import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import {
  accountAdminPermissionContext,
  accountClientPermissionContext,
  categoryPermissionContext,
  couponPermissionContext,
  productPermissionContext,
  rolePermissionContext,
  stylePermissionContext,
} from "@/contexts/permission.context";
import { PermissionList } from "@/components/admin/PermissonList";
import { useQuery } from "@tanstack/react-query";
import { roleDetail } from "@/services/roleService";

export const RoleEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Dữ liệu mô phỏng vai trò

  useEffect(() => {}, [id]);

  const {data, isLoading } = useQuery({
    queryKey: ["roleDetail", id],
    queryFn: () => roleDetail(id)
  });

  if(isLoading) {
    return <div>Đang tải dữ liệu</div>
  }
 

  console.log(data);
  // Giả lập submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const status = formData.get("status");
    const permission = formData.getAll("permission");

    const updatedRole = {
      id,
      name,
      status,
      permission,
    };

    console.log("Vai trò cập nhật:", updatedRole);
    toast.success("Cập nhật vai trò thành công (demo)");
    navigate("/admin/role/list");
  };

  return (
    <>
      <h1 className="p-4 sm:p-6 mb-4 text-3xl font-bold">Chỉnh sửa vai trò</h1>
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
            defaultValue={data?.data?.name}
            className="w-full border rounded-md p-2"
            placeholder="Nhập tên vai trò (VD: admin, staff, ...)"
            required
          />
        </div>

        {/* Danh sách quyền */}
        <PermissionList
          title="Danh sách quyền danh mục"
          arrayList={categoryPermissionContext}
          arrayCurrent={data?.data?.permission}
        />
        <PermissionList
          title="Danh sách quyền sản phẩm"
          arrayList={productPermissionContext}
          arrayCurrent={data?.data?.permission}
        />
        <PermissionList
          title="Danh sách quyền vai trò"
          arrayList={rolePermissionContext}
          arrayCurrent={data?.data?.permission}
        />
        <PermissionList
          title="Danh sách quyền phong cách"
          arrayList={stylePermissionContext}
          arrayCurrent={data?.data?.permission}
        />
        <PermissionList
          title="Danh sách quyền mã giảm giá"
          arrayList={couponPermissionContext}
          arrayCurrent={data?.data?.permission}
        />
        <PermissionList
          title="Danh sách quyền tài khoản quản trị"
          arrayList={accountAdminPermissionContext}
          arrayCurrent={data?.data?.permission}
        />
        <PermissionList
          title="Danh sách quyền tài khoản người dùng"
          arrayList={accountClientPermissionContext}
          arrayCurrent={data?.data?.permission}
        />

        {/* Trạng thái */}
        <div>
          <label className="block mb-1 font-medium">Trạng thái</label>
          <select
            name="status"
            defaultValue={data?.data?.status}
            className="w-full border rounded-md p-2"
          >
            <option value="active">Hoạt động</option>
            <option value="inactive">Ngừng hoạt động</option>
          </select>
        </div>

        {/* Nút submit */}
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-600"
        >
          Cập nhật vai trò
        </button>
      </form>
    </>
  );
};
