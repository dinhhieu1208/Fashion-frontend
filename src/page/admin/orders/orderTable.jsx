import { Edit3 } from "lucide-react";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { useQuery } from "@tanstack/react-query";
import { getAllOrder } from "@/services/orderService";
import PaginationComponent from "@/components/client/Pagination";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const OrderTable = (props) => {
  const { keyword, status } = props;
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [paymentStatus, setPaymentStatus] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading } = useQuery({
    queryKey: ["orderList", keyword, status, paymentStatus, page],
    queryFn: () => getAllOrder(keyword, status, paymentStatus, page),
    retry: false
  })

  const onChangePage = (pageNumber) => {
    setPage(pageNumber)
    setSearchParams({search: keyword, status: status, page: pageNumber});
  };


  if (isLoading) {
    return <div>Đang tải dữ liệu</div>
  };

  console.log(page);
  return (
    <div className="overflow-x-auto w-full">
      {/* ✅ Desktop/Table view (hiện từ 1025px trở lên) */}
      <table className="hidden lg:table min-w-full border-collapse border bg-white rounded-xl shadow-md text-[15px]">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-3 text-left text-lg font-semibold">Khách hàng</th>
            <th className="px-4 py-3 text-left text-lg font-semibold">Sản phẩm</th>
            <th className="px-4 py-3 text-right text-lg font-semibold">Tổng tiền</th>
            <th className="px-4 py-3 text-center text-lg font-semibold max-[1075px]:hidden">
              Thanh toán
            </th>
            <th className="px-4 py-3 text-center text-lg font-semibold max-[1200px]:hidden">
              Ngày tạo
            </th>
            <th className="px-4 py-3 text-center text-lg font-semibold">Hành động</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-gray-50">
          {data?.data.map((order, index) => {
            const visibleItems = order.orderList.slice(0, 2);
            const hiddenCount = order.orderList.length - visibleItems.length;
            const hiddenList = order.orderList.slice(2);

            return (
              <tr
                key={order.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
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
                        title={hiddenList.map((i) => `${i.name} (x${i.quantity})`).join(", ")}
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
                    className={`inline-block px-3 py-1 rounded-full font-semibold ${order.paymentStatus.key === "unpaid"
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
        {data?.data.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">{order.email}</h3>
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${order.paymentStatus.key === "unpaid"
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
                <strong>Tổng:</strong> {order.totalAfterDiscount.toLocaleString()}₫
              </span>
              <span>{order.createdAt}</span>
            </div>

            <div className="flex justify-between items-center mt-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm">
                {order.status.value}
              </span>
              <div className="flex gap-2">
                <button className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                  <Edit3 size={18} />
                </button>
                <DeleteButton />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[10px]">
        <PaginationComponent
          pages={data?.totalPage || 1}
          onChangePage={onChangePage}
        />
      </div>
    </div>
  );
};