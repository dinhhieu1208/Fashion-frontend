import React, { useState } from "react";
import { Trash2 } from "lucide-react";

const ordersData = [
  {
    id: "68cd04d0bc9683b115d85072",
    orderList: [
      {
        id: "68c11de372c265eb9b62fda7",
        name: "Quần áo 01",
        image: "/images/clother-1.jpg",
        quantity: 1,
        size: "M",
        price: 100000,
      },
      {
        id: "68c11e5372c265eb9b62fdb2",
        name: "Quần áo 02",
        image: "/images/clother-2.jpg",
        quantity: 1,
        size: "L",
        price: 100000,
      },
    ],
    totalAfterDiscount: 200000,
    paymentStatus: {
      key: "unpaid",
      value: "Chưa thanh toán",
    },
    status: {
      key: "init",
      value: "Đang khởi tạo đơn hàng",
    },
    createdAt: "14:22 19/09/2025",
  },

  {
    id: "68cd04aaf93f18de744195cf",
    orderList: [
      {
        id: "68c11de372c265eb9b62fda7",
        name: "Quần áo 01",
        image: "/images/clother-1.jpg",
        quantity: 1,
        size: "M",
        price: 100000,
      },
      {
        id: "68c11e5372c265eb9b62fdb2",
        name: "Quần áo 02",
        image: "/images/clother-2.jpg",
        quantity: 1,
        size: "L",
        price: 100000,
      },
    ],
    totalAfterDiscount: 200000,
    paymentStatus: {
      key: "unpaid",
      value: "Chưa thanh toán",
    },
    status: {
      key: "init",
      value: "Đang khởi tạo đơn hàng",
    },
    createdAt: "14:22 19/09/2025",
  },
];

export default function OrderProduct() {
  const [orders, setOrders] = useState(ordersData);

  const handleDelete = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-black mb-6">
        Đơn hàng của tôi
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="p-3">Mã</th>
              <th className="p-3">Danh sách sản phẩm</th>
              <th className="p-3">Tổng tiền</th>
              <th className="p-3">Thanh toán</th>
              <th className="p-3">Trạng thái</th>
              <th className="p-3">Ngày đặt</th>
              <th className="p-3 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                {/* Mã đơn */}
                <td className="p-3 text-blue-600">{order.id}</td>

                {/* Danh sách sản phẩm */}
                <td className="p-3">
                  <div className="space-y-3">
                    {order.orderList.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-3"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-gray-500 text-xs">
                            Size: {item.size} | SL: {item.quantity}
                          </p>
                          <p className="text-gray-600 text-xs">
                            Giá: {item.price.toLocaleString()}₫
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </td>

                {/* Tổng tiền */}
                <td className="p-3 font-semibold">
                  {order.totalAfterDiscount.toLocaleString()}₫
                </td>

                {/* Thanh toán */}
                <td className="p-3">{order.paymentStatus.value}</td>

                {/* Trạng thái */}
                <td className="p-3">
                  <span
                    className={` rounded text-center text-sm ${
                      order.status.key === "init"
                        ? " text-yellow-600"
                        : " text-green-600"
                    }`}
                  >
                    {order.status.value}
                  </span>
                </td>

                {/* Ngày đặt */}
                <td className="p-3">{order.createdAt}</td>

                {/* Hành động */}
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="p-2 rounded hover:bg-red-100"
                  >
                    <Trash2 className="text-red-500 w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
