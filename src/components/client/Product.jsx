/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "@/services/productService";
import { useSearchParams } from "react-router-dom";
import Pagination from "../client/Pagination";
// import banner from "../../assets/images/banner.webp";

const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceFilter, setPriceFilter] = useState("");
  const [page, setPage] = useState(1);

  const limit = 4;

  const { data } = useQuery({
    queryKey: ["products", priceFilter, page],
    queryFn: () => getAllProduct(priceFilter, page, limit),
    keepPreviousData: true,
  });

  const handleOnChange = (e) => {
    const priceValue = e.target.value;
    setSearchParams({
      priceFilter: priceValue,
    });
    setPriceFilter(priceValue);
    setPage(1);
  };

  return (
    <main>
      <section className="pt-12 pb-12">
        <div className=" max-w-[1600px] mx-auto px-6 sm:px-3">
          <div className="flex justify-center">
            {/* Danh sách sản phẩm */}
            <div className="w-full p-4">
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between text-base sm:text-2xl mb-6">
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold uppercase text-lg sm:text-2xl">
                      Tất cả
                    </h2>
                    <h2 className="font-bold uppercase text-lg sm:text-2xl">
                      Sản phẩm
                    </h2>
                  </div>
                  <select
                    className="border-2 bg-gray-500 border-white text-sm px-2 cursor-pointer"
                    defaultValue={""}
                    onChange={handleOnChange}
                  >
                    <option value="">Sắp xếp theo giá: Liên quan</option>
                    <option value="asc">Sắp xếp theo giá: Thấp đến Cao</option>
                    <option value="desc">Sắp xếp theo giá: Cao đến Thấp</option>
                  </select>
                </div>
              </div>

              {data?.data?.data?.length === 0 ? (
                <div className="text-center text-gray-500 text-lg py-12">
                  Không tìm thấy sản phẩm nào.
                </div>
              ) : (
                <>
                  <ul className="mt-8 lg:grid grid-cols-4 gap-7">
                    {data?.data?.data?.map((item) => (
                      <li
                        key={item.id}
                        className="mt-6 md:mt-0 text-center group relative"
                      >
                        <a href="#" className="block">
                          {/* Ảnh sản phẩm */}
                          <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                            <img
                              className="block size-full object-cover hover:scale-110 duration-500 transition-all w-full h-full"
                              src={item.image}
                            />
                          </div>

                          {/* Tên sản phẩm */}
                          <h3 className="text-[15px] mt-2 font-semibold">
                            {item.name}
                          </h3>

                          {/* Giá + Add to cart */}
                          <div className="mt-2 relative h-5 overflow-hidden">
                            <div className="absolute flex flex-col items-center left-1/2 -translate-x-1/2 hover:bottom-0 -bottom-5 transition-all duration-300">
                              {/* Giá sản phẩm */}
                              <div className="flex items-center justify-center font-bold text-[15px] text-center">
                                {item.currentPriceFormat ? (
                                  <>
                                    <span className="text-gray-400 line-through text-sm mr-2">
                                      {item.originPriceFormat} ₫
                                    </span>
                                    <span className="mx-1">-</span>
                                    <span className="text-red-600">
                                      {item.currentPriceFormat} ₫
                                    </span>
                                  </>
                                ) : (
                                  <span>{item.originPriceFormat} ₫</span>
                                )}
                              </div>

                              {/* Nút thêm vào giỏ */}
                              <a
                                href="#"
                                className="uppercase text-xs font-medium relative after:absolute after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:left-0 hover:after:w-full after:transition-all after:duration-500"
                              >
                                Thêm vào giỏ
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Phân trang */}
                  <div className="flex justify-center mt-10">
                    <Pagination onPageChange={(newPage) => setPage(newPage)} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
