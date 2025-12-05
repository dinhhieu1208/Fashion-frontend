import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import user from "../../assets/icons/user.png";
import carts from "../../assets/icons/shopping-bag.svg";
import icon_search from "../../assets/images/icon_search.png";
import logo from "../../assets/images/logo.jpg";
import icon_nav_menu from "../../assets/images/nav menu.png";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { logoutClient, profileUser } from "@/services/authService";
import { toast } from "sonner";
import { MainCategory } from "./MainCategory";
import { SearchProduct } from "./SearchProduct";

export default function Header() {
  const queryClient = useQueryClient();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // Call API lấy profile user
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: profileUser,
    retry: false,
  });
  useEffect(() => {
    queryClient.invalidateQueries(["users"]);
  }, [location.pathname, queryClient]);

  const handleLogout = async () => {
    try {
      await logoutClient();
      queryClient.removeQueries(["user"]);
      toast.success("Đăng xuất thành công");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 font-vietnam ">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="w-[70px] lg:w-[110px] block flex-shrink-0"
          >
            <img
              src={logo}
              alt="Shop Clothes Logo"
              className="block max-w-full object-contain"
            />
          </div>

          {/* Navbar */}
          <ul className="hidden lg:flex items-center space-x-8 text-black text-[18px] font-medium">
            <li
              className="relative group after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px]
                hover:after:scale-x-100 after:scale-x-0 after:w-full after:transition-all  duration-700 "
            >
              <Link to="#">Danh Mục</Link>
              {/* Submenu */}
              <MainCategory />
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
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] hover:after:scale-x-100 after:scale-x-0 after:w-full after:transition-all after:duration-300">
              <Link to="/location">Chi Nhánh </Link>
            </li>
          </ul>

          {/* Search + User + Cart */}
          <div className="flex items-center gap-4">
            <SearchProduct />
            {/* Mobile Search */}
            <button
              onClick={() => setIsMobileSearchOpen(true)}
              className="block lg:hidden"
            >
              <img src={icon_search} alt="Search" className="w-6 h-6" />
            </button>
            {/* User */}
            {data?.data ? (
              <div className="relative group">
                <button className="flex items-center gap-2">
                  <img
                    src={data.data.image}
                    alt="User"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="hidden lg:block text-sm">
                    {data.data.fullName}
                  </span>
                </button>
                <ul className="absolute right-0 mt-0 w-56 bg-white shadow-lg rounded-lg opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-60">
                  <li
                    onClick={() => navigate("/profile")}
                    className="px-5 py-2.5 hover:bg-gray-50 cursor-pointer text-lg text-gray-700 "
                  >
                    Thông tin cá nhân
                  </li>
                  <li
                    onClick={() => navigate("/orders")}
                    className="px-5 py-2.5 hover:bg-gray-50 cursor-pointer text-lg text-gray-700"
                  >
                    Đơn hàng
                  </li>
                  <li
                    onClick={handleLogout}
                    className="px-5 py-2.5 hover:bg-gray-50 cursor-pointer text-lg text-red-500"
                  >
                    Đăng xuất
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <img src={user} alt="User" className="w-6 h-6" />
              </Link>
            )}
            {/* Cart */}
            <Link to="/cart">
              <img src={carts} alt="Cart" className="w-6 h-6" />
            </Link>
            {/* Mobile Menu */}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-0 left-0 w-64 h-full bg-white text-black z-40 p-6 space-y-6 shadow-lg">
            <ul className="space-y-5 text-base text-black divide-y divide-gray-600">
              <li>
                <Link to="/product">Sản Phẩm</Link>
              </li>
              <li>
                <Link to="/introduce">Giới Thiệu</Link>
              </li>
              <li>
                <Link to="/contact">Liên Hệ</Link>
              </li>
              <li>
                <Link to="/location">Chi Nhánh</Link>
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
