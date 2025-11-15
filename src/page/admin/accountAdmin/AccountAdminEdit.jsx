import { accountAdminDetail, accountAdminEdit } from "@/services/accountAdminService";
import { getAllRole } from "@/services/roleService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export const AccountEdit = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState("");

  const { data: role } = useQuery({
    queryKey: ["getAllRole"],
    queryFn: getAllRole
  });

  const { data: accountDetail, isLoading } = useQuery({
    queryKey: ["accountDetail", id],
    queryFn: () => accountAdminDetail(id)
  })

  const mutation = useMutation({
    mutationFn: ({ id, data }) => accountAdminEdit(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["accountDetail"]);
      queryClient.invalidateQueries(["getAllRole"]);
      toast.success("Chỉnh sửa thành công");
      navigate("/admin/account/list");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Chỉnh sửa thất bại")
    }
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreviewImage(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (accountDetail?.data?.image) {
      setPreviewImage(accountDetail.data.image);
    }
  }, [accountDetail]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();

    formData.append("fullName", form.fullName.value);
    formData.append("email", form.email.value);
    formData.append("address", form.address.value);
    formData.append("phone", form.phone.value);
    formData.append("roleId", form.roleId.value);
    formData.append("status", form.status.value);

    if (fileInputRef.current?.files?.[0]) {
      formData.append("image", fileInputRef.current.files[0]);
    }

    mutation.mutate({
      id: id,
      data: formData
    })
  };

  if (isLoading) {
    return <div>Đang tải dữ liệu</div>
  }

  return (
    <>
      <h1 className="p-4 sm:p-6 mb-4 text-3xl font-bold">
        Chỉnh sửa tài khoản
      </h1>

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
            defaultValue={accountDetail?.data?.name}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={accountDetail?.data?.email}
            className="w-full border rounded-md p-2 "
          />
        </div>

        {/* Địa chỉ */}
        <div>
          <label className="block mb-1 font-medium">Địa chỉ</label>
          <input
            type="text"
            name="address"
            defaultValue={accountDetail?.data?.address}
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="block mb-1 font-medium">Số điện thoại</label>
          <input
            type="text"
            name="phone"
            defaultValue={accountDetail?.data?.phone}
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Vai trò */}
        <div>
          <label className="block mb-1 font-medium">Vai trò</label>
          <select
            name="roleId"
            defaultValue={accountDetail?.data?.roleId}
            className="w-full border rounded-md p-2"
          >
            <option value="">-- Chọn vai trò --</option>
            {role?.data.map((role) => (
              <option key={role._id} value={role._id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {/* Trạng thái */}
        <div>
          <label className="block mb-1 font-medium">Trạng thái</label>
          <select
            name="status"
            defaultValue=""
            className="w-full border rounded-md p-2"
          >
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

        {/* Nút lưu */}
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-600"
        >
          Cập nhật tài khoản
        </button>
      </form>
    </>
  );
};
