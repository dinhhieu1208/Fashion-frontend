import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import Banner from "../../assets/images/Banner.jpg";
// import logo1 from "../../assets/images/Logo-1.png";
// import logo2 from "../../assets/images/Logo-2.png";
// import logo3 from "../../assets/images/Logo-3.png";
// import logo4 from "../../assets/images/Logo-4.png";
import clother1 from "../../assets/images/clother-1.jpg";
import clother2 from "../../assets/images/clother-2.jpg";
import banner1 from "../../assets/images/ilutranstion-1.jpg";
import banner2 from "../../assets/images/ilutranstion-2.jpg";
import banner3 from "../../assets/images/ilutranstion-3.jpg";
import banner4 from "../../assets/images/ilutranstion-4.jpg";
import slideshow1 from "../../assets/images/slideshow_1.jpg";
import slideshow2 from "../../assets/images/slideshow_2.jpg";
import slideshow3 from "../../assets/images/slideshow_3.jpg";
import slideshow4 from "../../assets/images/slideshow_4.jpg";

export default function HomePage() {
  const slides = [slideshow1, slideshow2, slideshow3, slideshow4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 giây đổi ảnh
    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      _id: "1",
      name: "Áo Thun Unisex Basic",
      price: 199000,
      avatar: clother1,
      status: "active",
      discount: 20,
    },
    {
      _id: "2",
      name: "Quần Jean Nam Rách Gối",
      price: 349000,
      avatar: "/images/clother-2.jpg",
      status: "inactive",
      discount: 0,
    },
    {
      _id: "3",
      name: "Áo Sơ Mi Trắng ",
      price: 259000,
      avatar: clother2,
      status: "active",
      discount: 15,
    },
    {
      _id: "4",
      name: "Áo Khoác Hoodie",
      price: 399000,
      avatar: "/images/clother-4.jpg",
      status: "active",
      discount: 0,
    },
  ];
  const products1 = [
    {
      _id: "1",
      name: "Áo Polo Nam Cotton",
      price: 199000,
      avatar: "/images/clother-1.jpg",
      status: "active",
      discount: 20,
    },
    {
      _id: "2",
      name: "Quần Kaki Nam Dáng Slim",
      price: 349000,
      avatar: "/images/clother-2.jpg",
      status: "inactive",
      discount: 0,
    },
    {
      _id: "3",
      name: "Áo Len Dệt Kim Unisex",
      price: 259000,
      avatar: "/images/clother-3.jpg",
      status: "active",
      discount: 15,
    },
    {
      _id: "4",
      name: "Áo Khoác Bomber Nam",
      price: 399000,
      avatar: "/images/clother-4.jpg",
      status: "active",
      discount: 0,
    },
  ];

  const formatPrice = (value) =>
    value.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  const Products = products.map((item) => {
    const hasDiscount = item.discount > 0;
    const finalPrice = hasDiscount
      ? item.price - (item.price * item.discount) / 100
      : item.price;

    return { ...item, hasDiscount, finalPrice };
  });
  const Products1 = products1.map((item) => {
    const hasDiscount = item.discount > 0;
    const finalPrice = hasDiscount
      ? item.price - (item.price * item.discount) / 100
      : item.price;
    return { ...item, hasDiscount, finalPrice };
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
              className="w-full h-[500px] object-cover flex-shrink-0"
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
            SẢN PHẨM BÁN CHẠY NHẤT
          </h2>
          <ul className="mt-8 lg:grid grid-cols-4 gap-7">
            {Products.map((item) => (
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

                  {/* Giảm giá */}
                  {item.hasDiscount && item.status === "active" && (
                    <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-red-600 text-white rounded-xl">
                      -{item.discount}%
                    </span>
                  )}

                  {/* Ảnh sản phẩm */}
                  <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                    <img
                      className="block size-full object-cover hover:scale-110 duration-500 transition-all w-full h-full "
                      src={item.avatar}
                    />
                  </div>

                  {/* Tên sản phẩm */}
                  <h3 className="text-[15px] mt-2">{item.name}</h3>

                  {/* Giá + Add to cart */}
                  <div className="mt-2 relative h-5 overflow-hidden">
                    <div className="absolute flex flex-col items-center left-1/2 -translate-x-1/2 hover:bottom-0 -bottom-5 transition-all duration-300">
                      <div className="flex items-center justify-center font-bold text-[15px] text-center">
                        {item.hasDiscount ? (
                          <>
                            <span className="line-through text-gray-400 text-sm mr-2">
                              {formatPrice(item.price)}
                            </span>
                            <span className="mx-1">-</span>
                            <span className="text-red-600">
                              {formatPrice(item.finalPrice)}
                            </span>
                          </>
                        ) : (
                          <span>{formatPrice(item.price)}</span>
                        )}
                      </div>

                      {item.status === "active" && (
                        <a
                          href="#"
                          className="mt-1 uppercase text-xs font-medium relative after:absolute after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:left-0 hover:after:w-full after:transition-all after:duration-500"
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
          <div className="flex justify-center mt-8 w-15 h-15">
            <Link
              href="/#"
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
            {Products1.map((item) => (
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

                  {/* Giảm giá */}
                  {item.hasDiscount && item.status === "active" && (
                    <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-red-600 text-white rounded-xl">
                      -{item.discount}%
                    </span>
                  )}

                  {/* Ảnh sản phẩm */}
                  <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                    <img
                      className="block size-full object-cover hover:scale-110 duration-500 transition-all w-full h-full "
                      src={item.avatar}
                    />
                  </div>

                  {/* Tên sản phẩm */}
                  <h3 className="text-[15px] mt-2">{item.name}</h3>

                  {/* Giá + Add to cart */}
                  <div className="mt-2 relative h-5 overflow-hidden">
                    <div className="absolute flex flex-col items-center left-1/2 -translate-x-1/2 hover:bottom-0 -bottom-5 transition-all duration-300">
                      <div className="flex items-center justify-center font-bold text-[15px] text-center">
                        {item.hasDiscount ? (
                          <>
                            <span className="line-through text-gray-400 text-sm mr-2">
                              {formatPrice(item.price)}
                            </span>
                            <span className="mx-1">-</span>
                            <span className="text-red-600">
                              {formatPrice(item.finalPrice)}
                            </span>
                          </>
                        ) : (
                          <span>{formatPrice(item.price)}</span>
                        )}
                      </div>

                      {item.status === "active" && (
                        <a
                          href="#"
                          className="mt-1 uppercase text-xs font-medium relative after:absolute after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:left-0 hover:after:w-full after:transition-all after:duration-500"
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
          <div className="flex justify-center mt-8 w-15 h-15">
            <Link
              href="/#"
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
