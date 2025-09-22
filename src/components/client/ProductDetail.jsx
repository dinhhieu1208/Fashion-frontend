import { useState } from "react";
import { getOneProduct } from "@/services/productService";
import ActionDetailProduct from "./ActionDetailProductAddToCart";
import clother_1 from "../../assets/images/clother-1.jpg";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const products = {
  id: "68c11de372c265eb9b62fd",
  name: "Quan ao 01",
  images: clother_1,
  categoryIds: [
    { id: "68c11d0c72c265eb9b62fd95", name: "Áo sơ mi" },
    { id: "68c11ca272c265eb9b62fd7a", name: "Thời trang nam" },
  ],
  size: ["M", "L", "XL"],
  sex: "Nam",
  styleName: "Cổ điển",
  season: " Mùa Đông",
  originPrice: 1200000,
  currentPrice: 940000,
  originPriceFormat: "1.200.000",
  currentPriceFormat: "940.000",
};

const ProductDetailPage = () => {
  const [selectedSize, setSelectedSize] = useState(products.size[0]);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["productDetail", id],
    queryFn: () => getOneProduct(id)
  });

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <ul className="flex gap-2 items-center py-4 text-sm">
        <li>
          <a href="/" className="hover:underline">
            Home /
          </a>
        </li>
        {data?.data.categoryIds.map((cat, idx) => (
          <li key={cat.id}>
            <a href="#none" className="hover:underline">
              {cat.name}
              {idx < data?.data?.categoryIds.length - 1 ? " / " : " / "}
            </a>
          </li>
        ))}
        <li>{data?.data.name}</li>
      </ul>

      {/* Main content */}
      <div className="lg:grid grid-cols-5 gap-10">
        {/* Left images */}
        <div className="col-span-3 flex gap-4">
          <div className="flex-1 rounded-xl overflow-hidden">
            <img
              src={data?.data.image}
              alt={data?.data.name}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right info */}
        <div className="col-span-2 mt-6 lg:mt-0">
          <h1 className="text-2xl font-semibold">{data?.data.name}</h1>

          {/* Price */}
          <div className="mt-3 flex items-center gap-3">
            <p className="text-2xl font-bold text-black">
              {data?.data.currentPriceFormat}đ
            </p>
            <p className="line-through text-gray-400">
              {data?.data.originPriceFormat}đ
            </p>
          </div>

          {/* Size */}
          <div className="mt-6">
            <p className="font-medium mb-2">Chọn Size</p>
            <div className="flex gap-2 flex-wrap">
              {data?.data.size.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-2 border rounded-full ${selectedSize === s
                      ? "border-gray-300 text-white bg-black font-semibold"
                      : "border-gray-300"
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Giới tính */}
          <div className="mt-6">
            <p className="font-medium mb-2">Giới tính</p>
            <div className="flex gap-2 flex-wrap">{data?.data.sex}</div>
          </div>

          {/* Phong cách */}
          <div className="mt-6">
            <p className="font-medium mb-2">Phong cách</p>
            <div className="flex gap-2 flex-wrap">{data?.data.styleName}</div>
          </div>

          {/* Mùa */}
          <div className="mt-6">
            <p className="font-medium mb-2">Mùa</p>
            <div className="flex gap-2 flex-wrap">{data?.data.season}</div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="font-medium mb-2">Số lượng</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 border rounded"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border rounded"
              />
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <ActionDetailProduct
              product={data?.data}
              selectedSize={selectedSize}
              quantity={quantity}
            />
            {/* <button className="flex-1 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600">
              MUA NGAY
            </button> */}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-center text-xl lg:text-3xl font-semibold">
          Sản phẩm liên quan
        </h2>
      </div>
    </div>
  );
};

export default ProductDetailPage;
