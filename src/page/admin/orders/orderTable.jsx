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
          name: "Quan ao 02",
          image:
            "https://res.cloudinary.com/dculf3koq/image/upload/v1758528373/zjggx2alszse5xupdujv.png",
          quantity: 2,
          size: "M",
          price: 90000,
        },
        {
          id: "68d103c4dc863264dc568adf",
          name: "Quan ao 03",
          image:
            "https://res.cloudinary.com/dculf3koq/image/upload/v1758528452/bjuw5mdalprkoopgfgob.png",
          quantity: 2,
          size: "M",
          price: 90000,
        },
        {
          id: "68d103c4dc863264dc568adf",
          name: "Quan ao 03",
          image:
            "https://res.cloudinary.com/dculf3koq/image/upload/v1758528452/bjuw5mdalprkoopgfgob.png",
          quantity: 2,
          size: "M",
          price: 90000,
        },
      ],
      totalAfterDiscount: 360000,
      paymentStatus: {
        key: "unpaid",
        value: "Chưa thanh toán",
      },
      status: {
        key: "init",
        value: "Đang khởi tạo đơn hàng",
      },
      createdAt: "15:09 24/09/2025",
    },
    {
      id: "68d3a66f306619ccedb3c762",
      email: "nguyenvana@gmail.com",
      orderList: [
        {
          id: "68d10375dc863264dc568acb",
          name: "Quan ao 02",
          image:
            "https://res.cloudinary.com/dculf3koq/image/upload/v1758528373/zjggx2alszse5xupdujv.png",
          quantity: 1,
          size: "M",
          price: 90000,
        },
        {
          id: "68d103c4dc863264dc568adf",
          name: "Quan ao 03",
          image:
            "https://res.cloudinary.com/dculf3koq/image/upload/v1758528452/bjuw5mdalprkoopgfgob.png",
          quantity: 2,
          size: "M",
          price: 90000,
        },
      ],
      totalAfterDiscount: 270000,
      paymentStatus: {
        key: "unpaid",
        value: "Chưa thanh toán",
      },
      status: {
        key: "init",
        value: "Đang khởi tạo đơn hàng",
      },
      createdAt: "15:06 24/09/2025",
    },
  ];

  return (
    <div className="overflow-x-auto w-full">
      {/* ✅ Desktop/Table view (hiện từ 1025px trở lên) */}
      <table className="hidden lg:table min-w-full border-collapse border bg-white rounded-xl shadow-md text-[15px]">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Khách hàng
            </th>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Sản phẩm
            </th>
            <th className="px-4 py-3 text-right text-lg font-semibold">
              Tổng tiền
            </th>
            <th className="px-4 py-3 text-center text-lg font-semibold max-[1075px]:hidden">
              Thanh toán
            </th>
            <th className="px-4 py-3 text-center text-lg font-semibold max-[1200px]:hidden">
              Ngày tạo
            </th>
            <th className="px-4 py-3 text-center text-lg font-semibold">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-gray-50">
          {orders.map((order, index) => {
            const visibleItems = order.orderList.slice(0, 2);
            const hiddenCount = order.orderList.length - visibleItems.length;
            const hiddenList = order.orderList.slice(2);

            return (
              <tr
                key={order.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100 transition-all`}
              >
                <td className="px-4 py-3 font-medium">{order.email}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-2">
                    {visibleItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 hover:bg-gray-100 rounded-md px-1"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-md border"
                        />
                        <div className="text-sm">
                          <div className="font-semibold">{item.name}</div>
                          <div className="text-gray-600">
                            {item.price.toLocaleString()}₫
                          </div>
                        </div>
                      </div>
                    ))}
                    {hiddenCount > 0 && (
                      <div
                        className="text-gray-500 text-sm italic truncate"
                        title={hiddenList
                          .map((i) => `${i.name} (x${i.quantity})`)
                          .join(", ")}
                      >
                        +{hiddenCount} sản phẩm khác
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-green-600 font-bold">
                  {order.totalAfterDiscount.toLocaleString()}₫
                </td>
                <td className="px-4 py-3 text-center max-[1075px]:hidden">
                  <span
                    className={`inline-block px-3 py-1 rounded-full font-semibold ${
                      order.paymentStatus.key === "unpaid"
                        ? "text-red-700 bg-red-100"
                        : "text-green-700 bg-green-100"
                    }`}
                  >
                    {order.paymentStatus.value}
                  </span>
                </td>
                <td className="px-4 py-3 text-center max-[1200px]:hidden">
                  {order.createdAt}
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                      <Edit3 size={18} />
                    </button>
                    <DeleteButton />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* ✅ Mobile view (hiện khi <= 1024px) */}
      <div className="lg:hidden flex flex-col gap-4 mt-2">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">{order.email}</h3>
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  order.paymentStatus.key === "unpaid"
                    ? "text-red-700 bg-red-100"
                    : "text-green-700 bg-green-100"
                }`}
              >
                {order.paymentStatus.value}
              </span>
            </div>

            <div className="flex flex-col gap-2 mb-2">
              {order.orderList.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 border-b border-gray-100 pb-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md border"
                  />
                  <div className="text-sm">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-gray-600">
                      {item.price.toLocaleString()}₫
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-sm text-gray-700">
              <span>
                <strong>Tổng:</strong>{" "}
                {order.totalAfterDiscount.toLocaleString()}₫
              </span>
              <span>{order.createdAt}</span>
            </div>

            <div className="flex justify-between items-center mt-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm">
                {order.status.value}
              </span>
              <div className="flex ">
                <button className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                  <Edit3 size={18} />
                </button>
                <DeleteButton />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
