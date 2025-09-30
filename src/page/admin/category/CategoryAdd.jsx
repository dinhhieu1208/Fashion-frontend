import { createCategory, getCategoryAdminStatusActive } from "@/services/categoryService";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function AddCategory() {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState("");
  const naviage = useNavigate();

  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: getCategoryAdminStatusActive,
    retry: false
  })


  const mutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      toast.success("Tạo danh mục thành công");
      naviage("/admin/category/list");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error?.response?.data?.message);
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file)); // hiển thị preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // lấy nhiều giá trị
    const parentCategoryIds = formData.getAll("parentCategoryId");
    formData.delete("parentCategoryId");
    formData.append("parentCategoryId", JSON.stringify(parentCategoryIds));

    // Lấy file thật từ input (không dùng previewImage)
    if (fileInputRef.current && fileInputRef.current.files[0]) {
      formData.set("image", fileInputRef.current.files[0]);
    }

    mutation.mutate(formData);
  };

  console.log(data?.data);
  return (
    <>
      <h1 className="p-4 sm:p-6 mb-4 text-3xl font-bold">Thêm danh mục mới</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-[1400px] mx-auto space-y-5 p-4 mb-4 bg-white rounded-lg shadow"
      >
        {/* Tên danh mục */}
        <div>
          <label className="block mb-1 font-medium">Tên danh mục</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-md p-2"
            placeholder="Nhập tên danh mục"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Chọn Category</label>
          {data?.data && (
            <>

              <div className="flex flex-wrap gap-4">
                {data?.data?.data.map((item) => (
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="parentCategoryId"
                      value={item.id}
                    />
                    <span className="ml-2">{item.name}</span>
                  </label>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Trạng thái */}
        <div>
          <label className="block mb-1 font-medium">Trạng thái</label>
          <select name="status" className="w-full border rounded-md p-2">
            <option value="active">Hoạt động</option>
            <option value="inactive">Ngừng hoạt động</option>
          </select>
        </div>

        {/* Vị trí */}
        <div>
          <label className="block mb-1 font-medium">Vị trí</label>
          <input
            type="number"
            name="position"
            className="w-full border rounded-md p-2"
            placeholder="Nhập vị trí"
          />
        </div>
        {/* Upload ảnh */}
        <div>
          <label className="block mb-2 font-medium">Tải lên hình ảnh</label>
          <div className="grid grid-cols-4 gap-3">
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
          <p className="text-xs text-gray-500 mt-1">Click vào ô để chọn ảnh</p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-400"
        >
          Thêm Category
        </button>
      </form>
    </>
  );
}
