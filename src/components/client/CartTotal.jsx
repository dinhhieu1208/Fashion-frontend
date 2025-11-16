import React from "react";

const CartTotal = ({ cartItems }) => {
  const currency = "đ";
  const delivery_fee = 30000;
  const discount = 0;

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
          <p>Voucher giảm giá</p>
          <p>
            {discount.toLocaleString("vi-VN")} {currency}
          </p>
        </div>
        <hr />
        <div className="flex justify-between ">
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
