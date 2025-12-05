import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import Banner from "../../assets/images/Banner.jpg";
// import logo1 from "../../assets/images/Logo-1.png";
// import logo2 from "../../assets/images/Logo-2.png";
// import logo3 from "../../assets/images/Logo-3.png";
// import logo4 from "../../assets/images/Logo-4.png";
import banner1 from "../../assets/images/ilutranstion-1.jpg";
import banner2 from "../../assets/images/ilutranstion-2.jpg";
import banner3 from "../../assets/images/ilutranstion-3.jpg";
import banner4 from "../../assets/images/ilutranstion-4.jpg";
import slideshow1 from "../../assets/images/slideshow_1.jpg";
import slideshow2 from "../../assets/images/slideshow_2.jpg";
import slideshow3 from "../../assets/images/slideshow_3.jpg";
import slideshow4 from "../../assets/images/slideshow_4.jpg";
import { useQuery } from "@tanstack/react-query";
import { lowPriceProducts, newestsProducts } from "@/services/productService";

export default function HomePage() {
  const slides = [slideshow1, slideshow2, slideshow3, slideshow4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 giây đổi ảnh
    return () => clearInterval(interval);
  }, []);

  const { data: lowProducts } = useQuery({
    queryKey: ["lowPriceProducts"],
    queryFn: lowPriceProducts,
    retry: false,
  });

  const { data: newestProducts } = useQuery({
    queryKey: ["newestsProducts"],
    queryFn: newestsProducts,
    retry: false,
  });

  return (
    <main className="bg-white">
      <section className="relative w-full max-w-[1400px] mx-auto overflow-hidden rounded-xl">
        {/* Slide wrapper */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index}`}
              className="w-full flex-shrink-0 object-cover h-[180px]  sm:h-[250px] md:h-[300px] lg:h-[500px] rounded-xl"
            />
          ))}
        </div>

        {/* Indicator dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* <section className="bg-black">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-y-6 lg:justify-between py-7">
            {[logo1, logo2, logo3, logo4].map((logo, i) => (
              <div key={i} className="w-1/2 lg:w-auto flex justify-center">
                <img src={logo} alt="" className="h-[33px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="mt-9 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <h2 className="text-4xl font-bold text-center">
            SẢN PHẨM GIÁ TỐT NHẤT
          </h2>
          <ul className="mt-8 lg:grid grid-cols-4 gap-7">
            {lowProducts?.data?.data?.map((item) => (
              <li
                key={item._id}
                className="mt-6 md:mt-0 text-center group relative"
              >
                <Link to={`/product/${item._id}`} className="block">
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
                        {item.currentPrice ? (
                          <>
                            <span className="text-gray-400 line-through text-sm mr-2">
                              {item.originPrice} ₫
                            </span>
                            <span className="mx-1">-</span>
                            <span className="text-red-600">
                              {item.currentPrice} ₫
                            </span>
                          </>
                        ) : (
                          <span>{item.originPrice} ₫</span>
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
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mt-8 w-15 h-15">
            <Link
              to="/product"
              className="h-12 border border-black px-10 inline-flex items-center font-semibold text-black rounded-full text-lg text-center hover:bg-black hover:text-white transition-all duration-300"
            >
              Xem thêm
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-9 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <h2 className="text-4xl font-bold text-center">SẢN PHẨM MỚI NHẤT</h2>
          <ul className="mt-8 lg:grid grid-cols-4 gap-7">
            {newestProducts?.data?.data?.map((item) => (
              <li
                key={item.id}
                className="mt-6 md:mt-0 text-center group relative"
              >
                <Link to={`/product/${item.id}`} className="block">
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
                  <div className="mt-2 relative h-5 overflow-hidden md:mb-5">
                    <div className="absolute flex flex-col items-center left-1/2 -translate-x-1/2 hover:bottom-0 -bottom-5 transition-all duration-300">
                      {/* Giá sản phẩm */}
                      <div className="flex items-center justify-center font-bold text-[15px] text-center">
                        {item.currentPrice ? (
                          <>
                            <span className="text-gray-400 line-through text-sm mr-2">
                              {item.originPrice} ₫
                            </span>
                            <span className="mx-1">-</span>
                            <span className="text-red-600">
                              {item.currentPrice} ₫
                            </span>
                          </>
                        ) : (
                          <span>{item.originPrice} ₫</span>
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
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mt-8 w-15 h-15">
            <Link
              to="/product"
              className="h-12 border border-black px-10 inline-flex items-center font-semibold text-black rounded-full text-lg text-center hover:bg-black hover:text-white transition-all duration-300"
            >
              Xem thêm
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-3 mb-20">
        <div className="max-[1200px] mx-auto px-4 py-4">
          <div className="rounded-[40px] bg-gray-100 p-16">
            {/* Tiêu đề */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              DANH MỤC NỔI BẬT
            </h2>

            <div className="flex h-72 mb-5">
              <div className="relative w-[35%] mr-6">
                <img
                  src={banner1}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute top-6 left-9 text-3xl font-bold">
                  Đơn Giản
                </div>
              </div>
              <div className="relative w-[65%]">
                <img
                  src={banner2}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute top-6 left-9 text-3xl font-bold">
                  Lịch Lãm
                </div>
              </div>
            </div>

            <div className="flex h-72">
              <div className="relative w-[65%] mr-6">
                <img
                  src={banner3}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute top-6 left-9 text-3xl font-bold">
                  Dạ Hội
                </div>
              </div>
              <div className="relative w-[35%]">
                <img
                  src={banner4}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-12 text-3xl font-bold">
                  GYM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
