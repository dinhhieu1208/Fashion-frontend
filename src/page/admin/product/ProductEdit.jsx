import { getCategoryAdminStatusActive } from "@/services/categoryService";
import { productDetail, updateProduct } from "@/services/productService";
import { getAllStyleStatusActive } from "@/services/styleService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export default function ProductEdit() {
  const { id } = useParams();
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: getCategoryAdminStatusActive,
    retry: false,
    refetchOnMount: true,
  });

  const { data: styleData } = useQuery({
    queryKey: ["style"],
    queryFn: getAllStyleStatusActive,
    retry: false,
    refetchOnMount: true,
  });

  const { data: productDetailData, isLoading } = useQuery({
    queryKey: ["productDetail", id],
    queryFn: () => productDetail(id),
    retry: false,
    refetchOnMount: true
  });

  useEffect(() => {
    if (productDetailData?.data?.image) {
      setPreviewImage(productDetailData.data.image);
    }
  }, [productDetailData]);

  const mutation = useMutation({
    mutationFn: ({ id, data }) => updateProduct(id, data),
    onSuccess: () => {
      toast.success("Chỉnh sửa thành công");
      queryClient.invalidateQueries(["category"])
      queryClient.invalidateQueries(["style"])
      queryClient.invalidateQueries(["productDetail", id]);
      navigate("/admin/product/list");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error?.response?.data?.message);
    },
  });
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
    
    mutation.mutate({
      id: id,
      data: formData
    });
  };

  if (isLoading) {
    return <div>Đang tải dữ liệu</div>
  }

  return (
    <>
      <h1 className="p-4 sm:p-6 mb-4 text-3xl font-bold">Chỉnh sửa sản phẩm {productDetailData?.data?.name}</h1>
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
            defaultValue={productDetailData?.data.name}
            required
          />
        </div>

        {/* CategoryIds */}
        <div>
          <label className="block mb-1 font-medium">Danh mục</label>
          <div className="flex flex-wrap gap-4">
            {data?.data?.data.map((item) =>
              <label key={item.id} className="flex items-center">
                <input
                  type="checkbox"
                  name="categoryIds"
                  value={item.id}
                  defaultChecked={
                    Array.isArray(productDetailData?.data?.categoryIds) &&
                    productDetailData.data.categoryIds.includes(String(item.id))
                  }
                />
                <span className="ml-2">{item.name}</span>
              </label>
            )}
          </div>
        </div>

        {/* Giới tính */}
        <div>
          <label className="block mb-1 font-medium">Giới tính</label>
          <select name="sex" className="w-full border rounded-md p-2" 
            defaultValue={productDetailData?.data?.sex || ""}
          >
            <option value="" disabled>Chọn giới tính</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="unisex">Cả nam & nữ</option>
          </select>
        </div>

        {/* Style */}
        <div>
          <label className="block mb-1 font-medium">Kiểu dáng</label>
          {styleData && styleData?.data?.length > 0 && (
            <select name="styleId" className="w-full border rounded-md p-2"
              defaultValue={productDetailData?.data?.styleId || ""}
            >
              <option value="" disabled>Chọn kiểu dáng</option>
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
          <select name="season" className="w-full border rounded-md p-2"
            defaultValue={productDetailData?.data?.season || ""}
          >
            <option value="" disabled>Chọn mùa</option>
            <option value="summer">Mùa hè</option>
            <option value="winter">Mùa đông</option>
            <option value="spring">Mùa xuân</option>
            <option value="fall">Mùa thu</option>
          </select>
        </div>

        {/* Size */}
        <div>
          <label className="block mb-1 font-medium">Kích cỡ</label>
          <div className="flex gap-4">
            {["M", "L", "XL"].map((sz) => (
              <label key={sz} className="flex items-center">
                <input type="checkbox" name="size" value={sz} 
                  defaultChecked = {
                    Array.isArray(productDetailData?.data?.size) &&
                    productDetailData.data.size.includes(String(sz))
                  }
                />
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
            defaultValue={productDetailData?.data?.material}
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
            defaultValue={productDetailData?.data?.quantity}
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
            defaultValue={productDetailData?.data?.originPrice}
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
            defaultValue={productDetailData?.data?.currentPrice}
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
            defaultValue={productDetailData?.data?.originOfProduction}
            required
          />
        </div>

        {/* Status */}
        <div>
          <label className="block mb-1 font-medium">Trạng thái</label>
          <select name="status" className="w-full border rounded-md p-2"
            defaultValue={productDetailData?.data?.status}
          >
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
          Cập nhật sản phẩm
        </button>
      </form>
    </>
  );
}