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
    <div className="overflow-x-auto p-3 sm:p-4">
      <table className="min-w-full table-fixed border bg-white border-gray-200 rounded-xl overflow-hidden shadow-md text-[15px]">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-3 text-left text-xl font-semibold whitespace-nowrap">
              Khách hàng
            </th>
            <th className="px-4 py-3 text-left text-xl font-semibold whitespace-nowrap">
              Sản phẩm
            </th>
            <th className="px-4 py-3 text-left text-xl font-semibold whitespace-nowrap">
              Tổng tiền
            </th>
            <th className="px-4 py-3 text-left text-xl font-semibold whitespace-nowrap">
              Thanh toán
            </th>
            <th className="px-4 py-3 text-left text-xl font-semibold whitespace-nowrap">
              Trạng thái
            </th>
            <th className="hidden md:table-cell text-xl font-semibold whitespace-nowrap ">
              Ngày tạo
            </th>
            <th className="px-2 sm:px-4 py-2 text-xl text-center font-semibold w-40">
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
                } hover:bg-gray-100 transition-all duration-150 align-middle`}
              >
                {/* Khách hàng */}
                <td className="px-4 py-3 text-gray-800 font-medium text-left align-middle whitespace-nowrap">
                  {order.email}
                </td>

                {/* Sản phẩm */}
                <td className="px-4 py-3 text-left align-middle">
                  <div className="flex flex-col gap-3 max-w-full">
                    {visibleItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 hover:bg-gray-100 rounded-md transition px-1"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md border border-gray-200 flex-shrink-0"
                        />
                        <div className="leading-tight min-w-0">
                          <div className="font-semibold text-gray-800 text-[15px]  ">
                            {item.name}
                          </div>
                          <div className="text-gray-600 text-[13px] font-medium ">
                            Giá: {item.price.toLocaleString()}₫
                          </div>
                        </div>
                      </div>
                    ))}

                    {hiddenCount > 0 && (
                      <div
                        className="text-gray-500 text-[16px] italic truncate"
                        title={hiddenList
                          .map((i) => `${i.name} (x${i.quantity})`)
                          .join(", ")}
                      >
                        +{hiddenCount} sản phẩm khác
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-green-600 font-bold   align-middle text-right pr-6 whitespace-nowrap">
                  {order.totalAfterDiscount.toLocaleString()}₫
                </td>

                {/* Thanh toán */}
                <td className="px-4 py-3 align-middle text-center">
                  <span
                    className={`inline-block px-3 py-1.5 rounded-full text-[17px] font-semibold ${
                      order.paymentStatus.key === "unpaid"
                        ? "text-red-700"
                        : "text-green-700 "
                    }`}
                  >
                    {order.paymentStatus.value}
                  </span>
                </td>

                {/* Trạng thái */}
                <td className="px-4 py-3 align-middle text-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[17px] font-semibold rounded-full whitespace-nowrap">
                    {order.status.value}
                  </span>
                </td>

                {/* Ngày tạo */}
                <td className="hidden md:table-cell px-2 sm:px-4 text-sm py-2">
                  {order.createdAt}
                </td>

                {/* Hành động */}
                <td className="px-4 py-3 align-middle text-center">
                  <div className="flex justify-center ">
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
    </div>
  );
};
