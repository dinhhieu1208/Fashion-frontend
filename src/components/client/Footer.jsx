import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between border-b border-neutral-700 pb-10 mb-8">
          <div className="w-full md:w-1/4 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-5">28.Shop</h2>
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

          {/* Company Info */}
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

          {/* Customer Support */}
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

          {/* Legal */}
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

        {/* Footer Bottom */}
        <div className="text-center text-sm text-neutral-500">
          © 2025 28.Shop. All Rights Reserved. Designed in Vietnam.
        </div>
      </div>
    </footer>
  );
}
