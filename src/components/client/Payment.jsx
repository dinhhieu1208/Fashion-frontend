import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export const Payment = () => {
  const sampleOrderId = Math.floor(100000000 + Math.random() * 900000000);

  const sampleOrder = {
    orderId: sampleOrderId,
    total: 380000,
    deliveryTime: "3 - 5 ngày",
    items: [
      {
        name: "Áo thun Unisex Basic",
        quantity: 2,
        price: 150000,
      },
      {
        name: "Quần jean rách gối",
        quantity: 1,
        price: 200000,
      },
    ],
  };
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#eaedf0]">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center border">
        {/* Icon check */}
        <div className="flex justify-center">
          <CheckCircle className="text-green-500" size={70} />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mt-4">Thanh toán thành công</h2>

        {/* Order code */}
        <p className="mt-3 text-gray-600 leading-relaxed">
          Mã số đơn hàng của bạn là{" "}
          <span className="text-green-600 font-semibold text-lg">
            {sampleOrderId}
          </span>
          .
          <br />
          Bạn có thể xem chi tiết trong{" "}
          <span
            className="font-medium text-blue-600 cursor-pointer"
            onClick={() => navigate("/orders")}
          >
            đơn hàng của tôi
          </span>
          .
        </p>
        {/* Delivery time */}
        <p className="mt-2 text-gray-600">
          Thời gian dự kiến giao hàng là
          <span className="font-medium"> {sampleOrder.deliveryTime}</span>.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/product")}
          className="mt-5 bg-black hover:bg-gray-500 text-white font-semibold px-8 py-3 rounded-lg"
        >
          TIẾP TỤC MUA HÀNG
        </button>
      </div>
    </div>
  );
};
