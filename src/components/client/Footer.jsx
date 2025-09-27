import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/images/logo.jpg";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-wrap justify-between border-b border-neutral-700 pb-10 mb-8">
          <div className="w-full md:w-1/4 mb-10 md:mb-0">
            <div
              onClick={() => navigate("/")}
              className="w-[70px] lg:w-[110px] block flex-shrink-0 cursor-pointer mb-6"
            >
              <img
                src={logo}
                alt="Shop Clothes Logo"
                className="block max-w-full object-contain invert "
              />
            </div>
            <p className="text-sm text-neutral-400 mb-6">
              Thời trang là ngôn ngữ thể hiện cá tính. Tại 28.Shop, chúng tôi
              mang đến những thiết kế áo độc đáo, tinh tế và đậm chất riêng cho
              bạn.
            </p>
            <div className="flex space-x-4">
              <a href="#">
                <FaFacebookF className="text-xl hover:text-neutral-300" />
              </a>
              <a href="#">
                <FaInstagram className="text-xl hover:text-neutral-300" />
              </a>
              <a href="#">
                <FaTiktok className="text-xl hover:text-neutral-300" />
              </a>
              <a href="#">
                <FaPinterestP className="text-xl hover:text-neutral-300" />
              </a>
              <a href="#">
                <FaYoutube className="text-xl hover:text-neutral-300" />
              </a>
            </div>
          </div>

          <div className="w-1/2 md:w-1/5 mb-10 md:mb-0">
            <h4 className="text-base font-semibold mb-5">CÔNG TY</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#">Về Chúng Tôi</a>
              </li>
              <li>
                <a href="#">Cửa Hàng</a>
              </li>
              <li>
                <a href="#">Tuyển Dụng</a>
              </li>
              <li>
                <a href="#">Liên Hệ</a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/5 mb-10 md:mb-0">
            <h4 className="text-base font-semibold mb-5">HỖ TRỢ</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#">Trung Tâm Trợ Giúp</a>
              </li>
              <li>
                <a href="#">Theo Dõi Đơn Hàng</a>
              </li>
              <li>
                <a href="#">Hướng Dẫn Mua Hàng</a>
              </li>
              <li>
                <a href="#">Chính Sách Đổi Trả</a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/5">
            <h4 className="text-base font-semibold mb-5">CHÍNH SÁCH</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#">Điều Khoản Dịch Vụ</a>
              </li>
              <li>
                <a href="#">Chính Sách Bảo Mật</a>
              </li>
              <li>
                <a href="#">Giao Hàng & Thanh Toán</a>
              </li>
              <li>
                <a href="#">Bản Quyền & Nhãn Hiệu</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-neutral-500">
          © 2025 28.Shop. All Rights Reserved. Designed in Vietnam.
        </div>
      </div>
    </footer>
  );
}
