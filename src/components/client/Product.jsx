import React, { useState } from "react";
import Spinner from "../../components/Spinner";
// import Pagination from "@/components/Pagination";

const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortType, setSortType] = useState("relavent");

  const category = [
    { _id: "cat1", name: "Áo thun" },
    { _id: "cat2", name: "Quần jean" },
    { _id: "cat3", name: "Áo sơ mi" },
  ];

  const clothes = [
    {
      _id: "1",
      name: "Áo Thun Unisex Basic",
      priceFormat: "199.000",
      avatar: "/images/clother-1.jpg",
      status: "active",
      rating: 4,
    },
    {
      _id: "2",
      name: "Quần Jean Nam Rách Gối",
      priceFormat: "349.000",
      avatar: "/images/clother-2.jpg",
      status: "inactive",
      rating: 3,
    },
    {
      _id: "3",
      name: "Áo Sơ Mi Trắng Nữ",
      priceFormat: "259.000",
      avatar: "/images/clother-3.jpg",
      status: "active",
      rating: 5,
    },
    {
      _id: "4",
      name: "Áo Thun Unisex Basic",
      priceFormat: "199.000",
      avatar: "/images/clother-4.jpg",
      status: "active",
      rating: 4,
    },
  ];

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <main>
      <section className="relative">
        <img
          src="/images/img_product_list_banner.webp"
          alt="Banner"
          className="w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-4xl font-semibold text-white">Product</h2>
        </div>
      </section>

      {loading && (
        <Spinner type="PacmanLoader" color="#000000" size={60} delay={500} />
      )}

      <section className="pt-12 pb-12">
        <div className="max-w-[1480px] w-full px-5 mx-auto">
          <div className="lg:grid grid-cols-5 gap-6">
            {/* Danh mục */}
            <div className="col-span-1 p-4 border rounded-md shadow-sm">
              <h2 className="text-lg font-semibold my-4">Danh Mục</h2>
              <ul className="space-y-3">
                {category.map((item) => (
                  <li
                    key={item._id}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="category-selection"
                      id={item._id}
                      value={item._id}
                      checked={selectedCategory === item._id}
                      onChange={() => handleCategoryChange(item._id)}
                    />
                    <label
                      htmlFor={item._id}
                      className="select-none font-medium text-sm"
                    >
                      {item.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Danh sách sản phẩm */}
            <div className="col-span-4 p-4">
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold uppercase text-lg sm:text-2xl">
                      Tất cả
                    </h2>
                    <h2 className="font-bold uppercase text-lg sm:text-2xl">
                      Sản phẩm
                    </h2>
                  </div>
                  <select
                    onChange={(e) => setSortType(e.target.value)}
                    className="border-2 border-gray-300 text-sm px-2 cursor-pointer"
                  >
                    <option value="relavent">
                      Sắp xếp theo giá: Liên quan
                    </option>
                    <option value="low-high">
                      Sắp xếp theo giá: Thấp đến Cao
                    </option>
                    <option value="high-low">
                      Sắp xếp theo giá: Cao đến Thấp
                    </option>
                  </select>
                </div>
              </div>

              {clothes.length === 0 ? (
                <div className="text-center text-gray-500 text-lg py-12">
                  Không tìm thấy sản phẩm nào.
                </div>
              ) : (
                <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                  {clothes.map((item) => (
                    <li
                      key={item._id}
                      className="mt-6 md:mt-0 text-center group relative"
                    >
                      <a href="#" className="block">
                        {/* Hết hàng */}
                        {item.status === "inactive" && (
                          <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-red-500 text-white rounded-xl">
                            Hết hàng
                          </span>
                        )}

                        {/* Ảnh sản phẩm */}
                        <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                          <img
                            className="block size-full object-cover hover:scale-110 duration-500 transition-all w-full h-full"
                            src={item.avatar}
                          />
                        </div>

                        {/* Tên sản phẩm */}
                        <h3 className="text-[15px] mt-2 font-semibold">
                          {item.name}
                        </h3>

                        {/* Giá + Add to cart */}
                        <div className="mt-2 relative h-5 overflow-hidden">
                          <div className="absolute flex items-center flex-col left-1/2 -translate-x-1/2 hover:bottom-0 -bottom-5 transition-all duration-300">
                            <div className="flex items-center justify-center font-bold text-[15px] text-center">
                              {item.priceFormat} ₫
                            </div>
                            {item.status === "active" && (
                              <a
                                href="#"
                                className="uppercase text-xs font-medium relative after:absolute after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:left-0 hover:after:w-full after:transition-all after:duration-500"
                              >
                                Thêm vào giỏ
                              </a>
                            )}
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
