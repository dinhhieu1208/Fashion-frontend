import { getCategoryAdminStatusActive } from "@/services/categoryService";
import { getAllStyleStatusActive } from "@/services/styleService";
import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";

export default function ProductAdd() {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: getCategoryAdminStatusActive,
  });

  const { data: styleData } = useQuery({
    queryKey: ["style"],
    queryFn: getAllStyleStatusActive,
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const categoryIds = formData.getAll("categoryIds");
    formData.delete("categoryIds");
    formData.append("categoryIds", JSON.stringify(categoryIds));

    const sizes = formData.getAll("size");
    formData.delete("size");
    formData.append("size", JSON.stringify(sizes));

    // image file
    if (fileInputRef.current && fileInputRef.current.files[0]) {
      formData.set("image", fileInputRef.current.files[0]);
    }

    // Test: log ra object
    const obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    console.log("Form data:", obj);
  };


  return (
    <>
      <h1 className="p-4 sm:p-6 mb-4 text-3xl font-bold">Thêm sản phẩm mới</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-[1400px] mx-auto space-y-5 p-4 mb-4 bg-white rounded-lg shadow"
      >
        {/* Tên sản phẩm */}
        <div>
          <label className="block mb-1 font-medium">Tên sản phẩm</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* CategoryIds */}
        <div>
          <label className="block mb-1 font-medium">Danh mục</label>
          <div className="flex flex-wrap gap-4">
            {data?.data?.data.map((item) => (
              <label key={item.id} className="flex items-center">
                <input type="checkbox" name="categoryIds" value={item.id} />
                <span className="ml-2">{item.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Giới tính */}
        <div>
          <label className="block mb-1 font-medium">Giới tính</label>
          <select name="sex" className="w-full border rounded-md p-2">
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="unisex">Cả nam & nữ</option>
          </select>
        </div>

        {/* Style */}
        <div>
          <label className="block mb-1 font-medium">Kiểu dáng</label>
          {styleData && styleData?.data?.length > 0 && (
            <select name="styleId" className="w-full border rounded-md p-2">
              {styleData?.data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Season */}
        <div>
          <label className="block mb-1 font-medium">Mùa</label>
          <select name="season" className="w-full border rounded-md p-2">
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
            <option value="fall">Fall</option>
          </select>
        </div>

        {/* Size */}
        <div>
          <label className="block mb-1 font-medium">Kích cỡ</label>
          <div className="flex gap-4">
            {["M", "L", "XL"].map((sz) => (
              <label key={sz} className="flex items-center">
                <input type="checkbox" name="size" value={sz} />
                <span className="ml-2">{sz}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Material */}
        <div>
          <label className="block mb-1 font-medium">Chất liệu</label>
          <input
            type="text"
            name="material"
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block mb-1 font-medium">Số lượng</label>
          <input
            type="number"
            name="quantity"
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* Origin Price */}
        <div>
          <label className="block mb-1 font-medium">Giá gốc</label>
          <input
            type="number"
            name="originPrice"
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* Current Price */}
        <div>
          <label className="block mb-1 font-medium">Giá bán</label>
          <input
            type="number"
            name="currentPrice"
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* Origin of Production */}
        <div>
          <label className="block mb-1 font-medium">Xuất xứ</label>
          <input
            type="text"
            name="originOfProduction"
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* Status */}
        <div>
          <label className="block mb-1 font-medium">Trạng thái</label>
          <select name="status" className="w-full border rounded-md p-2">
            <option value="active">Hoạt động</option>
            <option value="inactive">Ngừng hoạt động</option>
          </select>
        </div>

        {/* Upload ảnh */}
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

        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-400"
        >
          Thêm sản phẩm
        </button>
      </form>
    </>
  );
}
