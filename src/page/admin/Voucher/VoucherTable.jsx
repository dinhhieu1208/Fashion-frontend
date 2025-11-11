import { Edit3 } from "lucide-react";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import PaginationComponent from "@/components/client/Pagination";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { voucherDelete, voucherList } from "@/services/voucherService";

export const VoucherTable = (props) => {
  const { keyword, status } = props;
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading } = useQuery({
    queryKey: ["voucher", keyword, status, page],
    queryFn: () => voucherList(keyword, status, page),
  });

  if(isLoading) {
    return <div>Đang tải dữ liệu</div>
  }

  const callBack = (pageNumber) => {
    queryClient.invalidateQueries(["voucher"]);
    setSearchParams({ search: keyword, status: status, page: pageNumber });
    setPage(pageNumber);
  };

  return (
    <div className="overflow-x-auto w-full">
      {/* ✅ Desktop/Table view */}
      <table className="hidden lg:table min-w-full border-collapse border bg-white rounded-xl shadow-md text-[15px] mb-[15px]">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Tên voucher
            </th>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Giảm giá
            </th>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Ngày bắt đầu
            </th>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Ngày kết thúc
            </th>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Trạng thái
            </th>
            <th className="px-4 py-3 text-left text-lg font-semibold max-[1300px]:hidden">
              Người tạo
            </th>
            <th className="px-4 py-3 text-left text-lg font-semibold max-[1400px]:hidden">
              Người sửa
            </th>
            <th className="px-4 py-3 text-center text-lg font-semibold">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-gray-50">
          {data?.data.map((item, index) => (
            <tr
              key={item.id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 transition-all`}
            >
              <td className="px-4 py-3 font-medium text-[16px] ">
                {item.name}
              </td>
              <td className="px-4 py-3 text-lg">{item.discount}%</td>
              <td className="px-4 py-3 text-sm">{item.startDateFormat}</td>
              <td className="px-4 py-3 text-sm">{item.endDateFormat}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xl font-semibold ${
                    item.status === "active"
                      ? "text-green-700 bg-green-100"
                      : "text-red-700 bg-red-100"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-4 py-3 max-[1300px]:hidden text-xl">
                {item.createdByFormat}
              </td>
              <td className="px-4 py-3 max-[1400px]:hidden text-xl">
                {item.updatedByFornat}
              </td>
              <td className="px-4 py-3 text-center">
                <div className="flex justify-center gap-2">
                  <Link to={`/admin/voucher/edit/${item.id}`}>
                    <button className="p-2 rounded-md bg-blue-500 text-white hover:text-black hover:bg-white">
                      <Edit3 size={18} />
                    </button>
                  </Link>
                  <DeleteButton itemId={item.id} funcApi={voucherDelete} callBack={callBack}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Mobile view */}
      <div className="lg:hidden flex flex-col gap-4 mt-3">
        {data?.data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-800 text-lg">
                {item.name}
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

            <div className="text-sm text-gray-600 flex flex-col gap-1 mb-2">
              <span>
                <strong>Giảm giá:</strong> {item.discount}%
              </span>
              <span>
                <strong>Bắt đầu:</strong> {item.startDateFormat}
              </span>
              <span>
                <strong>Kết thúc:</strong> {item.endDateFormat}
              </span>
              <span>
                <strong>Người tạo:</strong> {item.createdByFormat}
              </span>
              <span>
                <strong>Người sửa:</strong> {item.updatedByFornat}
              </span>
            </div>

            <div className="flex justify-end items-center mt-2">
              <div className="flex gap-2">
                <Link to={`/admin/voucher/edit/${item.id}`}>
                  <button className="p-2 rounded-md bg-blue-500 text-white hover:text-black hover:bg-white">
                    <Edit3 size={18} />
                  </button>
                </Link>
                <DeleteButton itemId={item.id} funcApi={voucherDelete} callBack={callBack}/>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PaginationComponent pages={data?.totalPage || 1} currentPage={page} onChangePage={callBack} />
    </div>
  );
};
