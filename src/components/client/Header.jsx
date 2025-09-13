"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../assets/icons/user.png";
import carts from "../../assets/icons/shopping-bag.svg";
import icon_search from "../../assets/images/icon_search.png";
import icon_nav_menu from "../../assets/images/nav menu.png";
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 font-vietnam">
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer flex items-center gap-2"
          >
            <span className="text-2xl font-bold text-black">28.Shop</span>
          </div>

          {/* Navbar */}
          <ul className="hidden lg:flex items-center space-x-8 text-black text-[18px] font-medium">
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] hover:after:scale-x-100 after:scale-x-0 after:w-full after:transition-all after:duration-300">
              <Link to="/">Trang Chủ</Link>
            </li>

            {/* Danh mục có submenu */}
            <li className="relative group">
              <Link
                to="#"
                className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] hover:after:scale-x-100 after:scale-x-0 after:w-full after:transition-all after:duration-300"
              >
                Danh Mục
              </Link>
              {/* Submenu */}
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-300 z-50">
                {/* Nam */}
                <li className="px-4 py-2 hover:bg-gray-100 relative group/sub">
                  <Link to="/nam" className="flex justify-between items-center">
                    Nam
                  </Link>
                  {/* Submenu con */}
                  <ul className="absolute left-full top-0 ml-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover/sub:opacity-100 transform translate-y-2 group-hover/sub:translate-y-0 transition-all duration-300">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/nam/ao-so-mi">Áo sơ mi</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/nam/quan-thun">Quần thun</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/nam/ao-thun">Áo thun</Link>
                    </li>
                  </ul>
                </li>

                {/* Nữ */}
                <li className="px-4 py-2 hover:bg-gray-100 relative group/sub">
                  <Link to="/nu" className="flex justify-between items-center">
                    Nữ
                  </Link>
                  {/* Submenu con */}
                  <ul className="absolute left-full top-0 ml-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover/sub:opacity-100 transform translate-y-2 group-hover/sub:translate-y-0 transition-all duration-300">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/nu/quan-dai">Quần dài</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/nu/chan-vay">Chân váy</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/nu/ao-kieu">Áo kiểu</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] hover:after:scale-x-100 after:scale-x-0 after:w-full after:transition-all after:duration-300">
              <Link to="/product">Sản Phẩm</Link>
            </li>
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] hover:after:scale-x-100 after:scale-x-0 after:w-full after:transition-all after:duration-300">
              <Link to="/introduce">Giới Thiệu</Link>
            </li>
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] hover:after:scale-x-100 after:scale-x-0 after:w-full after:transition-all after:duration-300">
              <Link to="/contact">Liên Hệ</Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <form className="relative hidden lg:flex items-center border border-gray-300 rounded-full px-3 h-10 w-72">
              <img
                src={icon_search}
                alt="Search"
                className="w-4 h-4 absolute left-4"
              />
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="bg-transparent w-full pl-10 pr-4 text-sm focus:outline-none"
              />
            </form>

            {/* Mobile Search Button */}
            <button
              onClick={() => setIsMobileSearchOpen(true)}
              className="block lg:hidden"
            >
              <img src={icon_search} alt="Search" className="w-6 h-6" />
            </button>

            {/* Giỏ hàng & User */}
            <Link to="/login">
              <img src={user} alt="User" className="w-6 h-6" />
            </Link>
            <Link to="/cart">
              <img src={carts} alt="Cart" className="w-6 h-6" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="block lg:hidden"
            >
              <img src={icon_nav_menu} alt="Menu" className="w-6 h-6 invert" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {isMobileSearchOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsMobileSearchOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 w-full bg-white z-50 px-4 py-4 shadow-md animate-slide-down">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Tìm kiếm</span>
              <button
                onClick={() => setIsMobileSearchOpen(false)}
                className="text-xl"
              >
                ✕
              </button>
            </div>
            <form className="flex items-center border border-gray-300 rounded-full px-3 h-10 w-full">
              <img src={icon_search} alt="Search" className="w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="Tìm theo sản phẩm..."
                className="w-full text-sm focus:outline-none"
              />
            </form>
          </div>
        </>
      )}

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 w-64 h-full bg-white text-black z-40 p-6 space-y-6 shadow-lg">
            <ul className="space-y-5 text-base text-black divide-y divide-gray-600">
              <li>
                <Link to="/">Trang Chủ</Link>
              </li>
              <li>
                <Link to="/product">Sản Phẩm</Link>
              </li>
              <li>
                <Link to="/introduce">Bài Viết</Link>
              </li>
              <li>
                <Link to="/contact">Liên Hệ</Link>
              </li>
            </ul>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute mx-3 py-1 text-xs px-2 -top-0 right-0 bg-black text-white rounded-xl border-2"
            >
              ✕
            </button>
          </div>
        </>
      )}
    </header>
  );
}
