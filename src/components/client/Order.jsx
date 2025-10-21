import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAllUserOrder } from "@/services/orderService";
import PaginationComponent from "./Pagination";

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
  const [page, setPage] = useState(1);
  const handleDelete = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const { data, isLoading } = useQuery({
    queryKey: ["orders", page],
    queryFn: () => getAllUserOrder(page),
    retry: false,
  });

  const callBack = (pageNumber) => {
    setPage(pageNumber);
  };

  if (isLoading) {
    return <div>Đang tải dữ liệu</div>;
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-semibold text-black mb-6">
        Đơn hàng của tôi
      </h2>

      {/* BẢNG - hiển thị trên màn hình lớn */}
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full border border-gray-200 text-sm mb-5">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="p-3 max-[1300px]:hidden">Mã</th>
              <th className="p-3">Danh sách sản phẩm</th>
              <th className="p-3">Tổng tiền</th>
              <th className="p-3">Thanh toán</th>
              <th className="p-3 ">Trạng thái</th>
              <th className="p-3">Ngày đặt</th>
              <th className="p-3 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-3 text-blue-600 max-[1300px]:hidden">
                  {order.id}
                </td>
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
                    className={`rounded text-center text-sm ${
                      order.status.key === "init"
                        ? "text-yellow-600"
                        : "text-green-600"
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

      {/* CARD - hiển thị trên mobile */}
      <div className="block md:hidden space-y-4">
        {data?.data.map((order) => (
          <div
            key={order.id}
            className="border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm text-blue-600 font-semibold">
                Mã: {order.id}
              </p>
              <button
                onClick={() => handleDelete(order.id)}
                className="p-1 rounded hover:bg-red-100"
              >
                <Trash2 className="text-red-500 w-4 h-4" />
              </button>
            </div>

            {order.orderList.map((item) => (
              <div key={item.id} className="flex items-center space-x-3 mb-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-gray-500 text-xs">
                    Size: {item.size} | SL: {item.quantity}
                  </p>
                  <p className="text-gray-600 text-xs">
                    Giá: {item.price.toLocaleString()}₫
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-3 text-sm">
              <p>
                <strong>Tổng tiền:</strong>{" "}
                {order.totalAfterDiscount.toLocaleString()}₫
              </p>
              <p>
                <strong>Thanh toán:</strong> {order.paymentStatus.value}
              </p>
              <p>
                <strong>Trạng thái:</strong>{" "}
                <span
                  className={`${
                    order.status.key === "init"
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                >
                  {order.status.value}
                </span>
              </p>
              <p>
                <strong>Ngày đặt:</strong> {order.createdAt}
              </p>
            </div>
          </div>
        ))}
      </div>

      <PaginationComponent
        pages={data?.totalPage || 1}
        currentPage={page}
        onChangePage={callBack}
      />
    </div>
  );
}
