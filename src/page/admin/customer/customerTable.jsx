import { Edit3 } from "lucide-react";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { useQuery } from "@tanstack/react-query";
import { getAllClientAccount } from "@/services/accountService";
import PaginationComponent from "@/components/client/Pagination";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const CustomerTable = (props) => {
  const { keyword, status } = props;
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: customer } = useQuery({
    queryKey: ["customer", keyword, status, page],
    queryFn: () => getAllClientAccount(keyword, status, page),
    retry: false,
  });

  const callBack = (pageNumber) => {
    setSearchParams({
      search: keyword,
      status: status,
      page: pageNumber,
    });
    setPage(pageNumber);
  };

  return (
    <div className="overflow-x-auto w-full">
      {/* ✅ Desktop view */}
      <table className="hidden lg:table min-w-full border bg-white border-gray-200 rounded-lg overflow-hidden shadow-md text-sm sm:text-lg">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-2 text-left font-semibold w-64">
              Họ và tên
            </th>
            <th className="px-4 py-2 text-left font-semibold w-64 max-[1200px]:hidden ">
              Email
            </th>
            <th className="px-4 py-2 text-left font-semibold w-32">
              Ảnh đại diện
            </th>
            <th className="px-4 py-2 text-left font-semibold w-32">
              Trạng thái
            </th>
            <th className="px-4 py-2 text-left font-semibold w-40 max-[1200px]:hidden ">
              Ngày tạo
            </th>
            <th className="px-4 py-2 text-center font-semibold w-40  ">
              Hành động
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {customer?.data?.data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-2 text-lg">{item.fullName}</td>
              <td className="px-4 py-2 text-lg max-[1200px]:hidden ">
                {item.email}
              </td>
              <td className="px-4 py-2">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.fullName}
                    className="w-20 h-20 rounded-lg object-cover border"
                  />
                ) : (
                  <div className="w-20 h-20 flex items-center justify-center rounded-lg border bg-gray-100 text-gray-400">
                    No Image
                  </div>
                )}
              </td>

              <td className="px-4 py-2">
                <span
                  className={`inline-flex items-center text-xl justify-center px-4 py-2 font-semibold rounded-full ${
                    item.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="px-4 py-2 text-lg max-[1200px]:hidden ">
                {item.createdAt}
              </td>

              <td className="mt-4 px-2 sm:px-4 flex justify-center py-2 text-center">
                <button className="p-2 rounded-lg border bg-blue-400 border-gray-300 text-white hover:bg-white hover:text-black transition">
                  <Edit3 size={18} />
                </button>
                <DeleteButton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Mobile view */}
      <div className="lg:hidden flex flex-col gap-4 mt-3">
        {customer?.data?.data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800 text-lg">
                {item.fullName}
              </h3>
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  item.status === "active"
                    ? "text-green-700 bg-green-100"
                    : "text-red-700 bg-red-100"
                }`}
              >
                {item.status}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.fullName}
                  className="w-16 h-16 rounded-md border object-cover"
                />
              ) : (
                <div className="w-16 h-16 flex items-center justify-center rounded-md border bg-gray-100 text-gray-400">
                  No Image
                </div>
              )}

              <div className="text-sm text-gray-700 flex flex-col gap-1">
                <span>
                  <strong>Email:</strong> {item.email}
                </span>
                <span>
                  <strong>Ngày tạo:</strong> {item.createdAt}
                </span>
              </div>
            </div>

            <div className="flex justify-end items-center mt-2 ">
              <button className="p-2 rounded-lg border bg-blue-400 border-gray-300 text-white hover:bg-white hover:text-black transition">
                <Edit3 size={18} />
              </button>
              <DeleteButton />
            </div>
          </div>
        ))}
      </div>

      <PaginationComponent
        pages={customer?.data?.totalPage || 1}
        onChangePage={callBack}
      />
    </div>
  );
};
