import { createStyle } from "@/services/styleService";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
export default function AddStyle() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: createStyle,
    onSuccess: () => {
      toast.success("Tạo kiểu dáng thành công");
      navigate("/admin/style/list")
    },
    onError: (error) => {
      console.log(error);
      toast.error("Tạo kiểu dáng thất bại");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const status = e.target.status.value;

    const data = {
      name: name,
      status: status,
    };
    mutation.mutate(data);
  };

  return (
    <>
      <h1 className="p-4 sm:p-6 mb-4 text-3xl font-bold">Thêm kiểu dáng mới</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-[1400px] mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Tên kiểu dáng</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Nhập tên kiểu dáng"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block mb-1 font-medium">Trạng thái</label>
          <select
            name="status"
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="active">Hoạt động</option>
            <option value="inactive">Ngừng hoạt động</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-400"
        >
          Thêm kiểu dáng
        </button>
      </form>
    </>
  );
}
