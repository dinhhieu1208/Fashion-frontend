import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/images/Banner.jpg";
import logo1 from "../assets/images/Logo-1.png";
import logo2 from "../assets/images/Logo-2.png";
import logo3 from "../assets/images/Logo-3.png";
import logo4 from "../assets/images/Logo-4.png";
import clother1 from "../assets/images/clother-1.jpg";

export default function HomePage() {
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
      name: "Áo Sơ Mi Trắng Nữ",
      price: 259000,
      avatar: "/images/clother-3.jpg",
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

  const formatPrice = (value) =>
    value.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  const Products = products.map((item) => {
    const hasDiscount = item.discount > 0;
    const finalPrice = hasDiscount
      ? item.price - (item.price * item.discount) / 100
      : item.price;

    return { ...item, hasDiscount, finalPrice };
  });
  return (
    <main className="bg-[#F2F0F1]">
      {/* Banner */}
      <section className="max-w-[1200px] mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="max-w-xl">
            <h2 className="text-[48px] font-black mb-8">
              CHUYÊN THỜI TRANG PHONG CÁCH, HIỆN ĐẠI
            </h2>
            <p className="text-[16px] font-normal opacity-60 mb-12">
              Chúng tôi chuyên cung cấp nhiều loại quần áo được chế tác tỉ mỉ,
              được thiết kế để làm nổi bật cá tính của bạn và đáp ứng phong cách
              của bạn.
            </p>
            <a
              href="#"
              className="inline-block text-white bg-black py-4 px-[65px] rounded-full mb-12"
            >
              Xem ngay
            </a>
            <div className="flex flex-wrap gap-4 lg:gap-0">
              <div className="border-r border-gray-400 pr-8 mr-8">
                <div className="text-[40px] font-bold">200+</div>
                <div className="opacity-60">Thương Hiệu</div>
              </div>
              <div className="border-r border-gray-400 pr-8 mr-8">
                <div className="text-[40px] font-bold">2,000+</div>
                <div className="opacity-60">Sản Phẩm Chất Lượng</div>
              </div>
              <div>
                <div className="text-[40px] font-bold">200+</div>
                <div className="opacity-60">Khách Hàng</div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden w-full lg:w-1/2 mt-10 lg:mt-0">
            <img
              src={Banner}
              alt=""
              className="w-full object-cover pt-[50px] -mb-2"
            />
          </div>
        </div>
      </section>

      {/* Logo section */}
      <section className="bg-black">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-y-6 lg:justify-between py-7">
            {[logo1, logo2, logo3, logo4].map((logo, i) => (
              <div key={i} className="w-1/2 lg:w-auto flex justify-center">
                <img src={logo} alt="" className="h-[33px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product section */}
      <section className="mt-9 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
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
        </div>
      </section>
    </main>
  );
}
