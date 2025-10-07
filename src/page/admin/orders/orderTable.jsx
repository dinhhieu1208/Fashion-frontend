import { Edit3 } from "lucide-react";
import { DeleteButton } from "@/components/admin/DeleteButton";

export const OrderTable = () => {
  const orders = [
    {
      id: "68d3a743306619ccedb3c78a",
      email: "nguyenvana@gmail.com",
      orderList: [
        {
          id: "68d10375dc863264dc568acb",
          name: "Quần áo 02",
          image:
            "https://res.cloudinary.com/dculf3koq/image/upload/v1758528373/zjggx2alszse5xupdujv.png",
          quantity: 2,
          size: "M",
          price: 90000,
        },
        {
          id: "68d103c4dc863264dc568adf",
          name: "Quần áo 03",
          image:
            "https://res.cloudinary.com/dculf3koq/image/upload/v1758528452/bjuw5mdalprkoopgfgob.png",
          quantity: 2,
          size: "M",
          price: 90000,
        },
      ],
      totalAfterDiscount: 360000,
      paymentStatus: { key: "unpaid", value: "Chưa thanh toán" },
      status: { key: "init", value: "Đang khởi tạo đơn hàng" },
      createdAt: "15:09 24/09/2025",
    },
    {
      id: "68d3a66f306619ccedb3c762",
      email: "nguyenvana@gmail.com",
      orderList: [
        {
          id: "68d10375dc863264dc568acb",
          name: "Quần áo 02",
          image:
            "https://res.cloudinary.com/dculf3koq/image/upload/v1758528373/zjggx2alszse5xupdujv.png",
          quantity: 1,
          size: "M",
          price: 90000,
        },
        {
          id: "68d103c4dc863264dc568adf",
          name: "Quần áo 03",
          image:
            "https://res.cloudinary.com/dculf3koq/image/upload/v1758528452/bjuw5mdalprkoopgfgob.png",
          quantity: 2,
          size: "M",
          price: 90000,
        },
      ],
      totalAfterDiscount: 270000,
      paymentStatus: { key: "unpaid", value: "Chưa thanh toán" },
      status: { key: "done", value: "Đang khởi tạo đơn hàng" },
      createdAt: "15:06 24/09/2025",
    },
  ];

  const shortId = (id) => id.slice(0, 8) + "...";

  return (
    <div className="overflow-x-auto p-3 sm:p-4">
      <table className="min-w-full border bg-white border-gray-200 rounded-xl overflow-hidden shadow-md text-[15px] ">
        <thead className="bg-black text-white text-center">
          <tr>
            <th className="px-4 py-3 font-semibold">Mã đơn hàng</th>
            <th className="px-4 py-3 font-semibold">Khách hàng</th>
            <th className="px-4 py-3 font-semibold text-left w-[300px] sm:w-[360px]">
              Sản phẩm
            </th>
            <th className="px-4 py-3 font-semibold">Tổng tiền</th>
            <th className="px-4 py-3 font-semibold">Thanh toán</th>
            <th className="px-4 py-3 font-semibold">Trạng thái</th>
            <th className="px-4 py-3 font-semibold">Ngày tạo</th>
            <th className="px-4 py-3 font-semibold">Hành động</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-gray-50 text-center">
          {orders.map((order, index) => (
            <tr
              key={order.id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 transition-all duration-150 align-middle`}
            >
              {/* Mã đơn hàng */}
              <td className="px-4 py-3 text-gray-800 font-mono align-middle">
                {shortId(order.id)}
              </td>

              {/* Khách hàng */}
              <td className="px-4 py-3 text-gray-800 font-medium align-middle">
                {order.email}
              </td>

              {/* Sản phẩm */}
              <td className="px-4 py-3 text-left align-middle">
                <div className="flex flex-col gap-2">
                  {order.orderList.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 hover:bg-gray-100 rounded-md transition px-1"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md border border-gray-200"
                      />
                      <div className="leading-tight">
                        <div className="font-semibold text-gray-800 text-[15px] truncate max-w-[220px] ">
                          {item.name}
                        </div>
                        <div className="text-gray-500 text-[15px]">
                          Size: {item.size} | SL: {item.quantity}
                        </div>
                        <div className="text-gray-600 text-[14px] font-medium">
                          Giá: {item.price.toLocaleString()}₫
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </td>

              {/* Tổng tiền */}
              <td className="px-4 py-3 text-green-600 font-bold align-middle">
                {order.totalAfterDiscount.toLocaleString()}₫
              </td>

              {/* Thanh toán */}
              <td className="px-4 py-3 align-middle">
                <span
                  className={`inline-block px-3 py-1.5 rounded-full text-[17px] font-semibold ${
                    order.paymentStatus.key === "unpaid"
                      ? "text-red-700"
                      : "text-green-700"
                  }`}
                >
                  {order.paymentStatus.value}
                </span>
              </td>

              {/* Trạng thái */}
              <td className="px-4 py-3 align-middle">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[16px] font-semibold rounded-full whitespace-nowrap">
                  {order.status.value}
                </span>
              </td>

              {/* Ngày tạo */}
              <td className="px-4 py-3 text-gray-600 text-[14px] whitespace-nowrap align-middle">
                {order.createdAt}
              </td>

              {/* Hành động */}
              <td className="px-4 py-3 align-middle">
                <div className="flex justify-center ">
                  <button className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                    <Edit3 size={18} />
                  </button>
                  <DeleteButton />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
