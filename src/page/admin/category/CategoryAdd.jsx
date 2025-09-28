import React, { useState, useRef } from "react";

export default function AddCategory() {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const parentCategoryIds = formData.getAll("parentCategoryId");

    const data = {
      name: formData.get("name"),
      parentCategoryId: parentCategoryIds,
      status: formData.get("status"),
      position: formData.get("position"),
      image: formData.get("image") ? formData.get("image").name : null,
    };

    console.log("Category data:", data);
    alert("Xem console để thấy dữ liệu đã nhập!");
  };

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
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="parentCategoryId"
                value="68c11d0c72c265eb9b62fd95"
              />
              <span className="ml-2">Thời trang nam</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="parentCategoryId"
                value="68c11d0c72c265eb9b62fd96"
              />
              <span className="ml-2">Thời trang nữ</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="parentCategoryId"
                value="68c11d0c72c265eb9b62fd97"
              />
              <span className="ml-2">Phụ kiện</span>
            </label>
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
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setPreviewImage(URL.createObjectURL(file));
                  }
                }}
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
