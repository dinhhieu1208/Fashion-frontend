import React from "react";

const CartTotal = () => {
  // Dữ liệu mẫu giỏ hàng
  const cartItems = [
    { id: 1, name: "Sản phẩm A", price: 100000, quantity: 2 },
    { id: 2, name: "Sản phẩm B", price: 200000, quantity: 1 },
  ];

  const currency = "đ";
  const delivery_fee = 30000;

  // Hàm tính tổng tiền hàng
  const getCartAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-4">
      <div className="flex items-center gap-2">
        <h2 className="font-bold uppercase text-lg sm:text-2xl">Tổng tiền</h2>
        <h2 className="font-bold uppercase text-lg sm:text-2xl">Giỏ hàng</h2>
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Tạm tính</p>
          <p>
            {getCartAmount().toLocaleString("vi-VN")}
            {currency}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Phí giao hàng</p>
          <p>
            {delivery_fee.toLocaleString("vi-VN")}
            {currency}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Tổng tiền</b>
          <b>
            {getCartAmount() === 0
              ? 0
              : (getCartAmount() + delivery_fee).toLocaleString("vi-VN")}
            {currency}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
