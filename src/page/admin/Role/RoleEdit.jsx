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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { roleDetail, roleEdit } from "@/services/roleService";

export const RoleEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["roleDetail", id],
    queryFn: () => roleDetail(id),
  });


  const mutation = useMutation({
    mutationFn: ({ id, data }) => roleEdit(id, data),
    onSuccess: () => {
      toast.success("Cập nhật vai trò thành công!");
      queryClient.invalidateQueries(["roleDetail", id])
      navigate("/admin/role/list");
    },
    onError: () => {
      toast.error("Cập nhật vai trò thất bại!");
    },
  });

  if (isLoading || !data?.data) {
    return <div>Đang tải dữ liệu...</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const status = formData.get("status");
    const permission = formData.getAll("permission");
    const payload = { name, permission, status };
    console.log(payload);
    mutation.mutate({ id, data: payload });
  };

  return (
    <>
      <h1 className="p-4 sm:p-6 mb-4 text-3xl font-bold">Chỉnh sửa vai trò</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-5 p-4 mb-4 bg-white rounded-lg shadow"
      >
        <div>
          <label className="block mb-1 font-medium">Tên vai trò</label>
          <input
            type="text"
            name="name"
            defaultValue={data.data.name}
            className="w-full border rounded-md p-2"
            placeholder="Nhập tên vai trò (VD: admin, staff, ...)"
            required
          />
        </div>

        <PermissionList title="Danh sách quyền danh mục" arrayList={categoryPermissionContext} arrayCurrent={data.data.permission}/>
        <PermissionList title="Danh sách quyền sản phẩm" arrayList={productPermissionContext} arrayCurrent={data.data.permission}/>
        <PermissionList title="Danh sách quyền vai trò" arrayList={rolePermissionContext} arrayCurrent={data.data.permission}/>
        <PermissionList title="Danh sách quyền phong cách" arrayList={stylePermissionContext} arrayCurrent={data.data.permission}/>
        <PermissionList title="Danh sách quyền mã giảm giá" arrayList={couponPermissionContext} arrayCurrent={data.data.permission}/>
        <PermissionList title="Danh sách quyền tài khoản quản trị" arrayList={accountAdminPermissionContext} arrayCurrent={data.data.permission}/>
        <PermissionList title="Danh sách quyền tài khoản người dùng" arrayList={accountClientPermissionContext} arrayCurrent={data.data.permission}/>

        <div>
          <label className="block mb-1 font-medium">Trạng thái</label>
          <select
            name="status"
            defaultValue={data.data.status}
            className="w-full border rounded-md p-2"
          >
            <option value="active">Hoạt động</option>
            <option value="inactive">Ngừng hoạt động</option>
          </select>
        </div>

        <button type="submit" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-600">
          Cập nhật vai trò
        </button>
      </form>
    </>
  );
};