import { Edit3 } from "lucide-react";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { roleList } from "@/services/roleService";
import { useState } from "react";
import PaginationComponent from "@/components/client/Pagination";

export default function RoleTable() {
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const {data, isLoading} = useQuery({
    queryKey: ["role"],
    queryFn: roleList,
    retry: false
  });

  const callBack = (pageNumber) => {
    setSearchParams({page: pageNumber})
    setPage(pageNumber);
  }

  if(isLoading) {
    return <div>Đang tải dữ liệu</div>
  }

  return (
    <div className="overflow-x-auto w-full">
      {/* ✅ Desktop/Table view */}
      <table className="hidden lg:table min-w-full border-collapse border bg-white rounded-xl shadow-md text-[15px] mb-[15px]">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Tên vai trò
            </th>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Trạng thái
            </th>
            <th className="px-4 py-3 text-left text-lg font-semibold max-[1200px]:hidden">
              Ngày tạo
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
              <td className="px-4 py-3 font-medium text-xl">{item.name}</td>
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
              <td className="px-4 py-3 max-[1200px]:hidden text-sm">
                {item.createdAtFormat}
              </td>
              <td className="px-4 py-3 max-[1300px]:hidden text-xl">
                {item.createdByFormat}
              </td>
              <td className="px-4 py-3 max-[1400px]:hidden text-xl">
                {item.updatedByFormat}
              </td>
              <td className="px-4 py-3 text-center">
                <div className="flex justify-center gap-2">
                  <Link>
                    <button className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                      <Edit3 size={18} />
                    </button>
                  </Link>
                  <DeleteButton />
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
                <strong>Ngày tạo:</strong> {item.createdAtFormat}
              </span>
              <span>
                <strong>Người tạo:</strong> {item.createdByFormat}
              </span>
              <span>
                <strong>Người sửa:</strong> {item.updatedByFormat}
              </span>
            </div>

            <div className="flex justify-end items-center mt-2">
              <div className="flex gap-2">
                <Link to={`/admin/role/edit/${item.id}`}>
                  <button className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                    <Edit3 size={18} />
                  </button>
                </Link>
                <DeleteButton />
              </div>
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