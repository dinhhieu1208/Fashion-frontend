import React, { useState, useEffect } from "react";
import CartTotal from "./CartTotal";
import { useNavigate } from "react-router-dom";
import { profileUser } from "@/services/authService";
import { toast } from "sonner";

const Cart = () => {
  const navigate = useNavigate();

  const currency = "₫";

  const [cartData, setCartData] = useState([]);

  // ✅ Lấy dữ liệu từ localStorage khi component load
  useEffect(() => {
    const cartStorage = localStorage.getItem("cart");
    if (cartStorage) {
      setCartData(JSON.parse(cartStorage));
    }
  }, []);

  // ✅ Hàm cập nhật số lượng
  const updateQuantity = (id, size, newQuantity) => {
    const updated = cartData.map((item) =>
      item.id === id && item.size === size
        ? {
          ...item,
          quantity: newQuantity,
        }
        : item
    );
    setCartData(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ✅ Hàm xóa sản phẩm
  const removeItem = (id, size) => {
    const updated = cartData.filter(
      (item) => !(item.id === id && item.size === size)
    );
    setCartData(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handlePayment = async () => {
    try {
      await profileUser();
      toast.success("Thanh toán thành công");
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Vui lòng đăng nhập để thực hiện thanh toán");
      navigate("/login");
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-4">
      <div className="flex items-center gap-2">
        <h2 className="font-bold uppercase text-lg sm:text-2xl">Tất cả</h2>
        <h2 className="font-bold uppercase text-lg sm:text-2xl">Sản phẩm</h2>
      </div>

      {/* Danh sách sản phẩm */}
      <div>
        {cartData.length === 0 ? (
          <p className="text-gray-500 mt-6">Giỏ hàng trống</p>
        ) : (
          cartData.map((item, index) => (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              {/* Thông tin sản phẩm */}
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{item.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="text-[#e8002d]">
                      {item.quantity} x {item.price.toLocaleString("vi-VN")}
                      {currency}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              {/* Số lượng */}
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item.id, item.size, Number(e.target.value))
                }
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                value={item.quantity}
              />

              {/* Nút xóa */}
              <button
                onClick={() => removeItem(item.id, item.size)}
                className="text-red-500 font-bold"
              >
                X
              </button>
            </div>
          ))
        )}
      </div>

      {/* Tổng tiền và nút thanh toán */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={handlePayment}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
