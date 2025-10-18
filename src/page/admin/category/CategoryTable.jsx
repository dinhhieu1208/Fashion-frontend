import { Edit3 } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { categoriesAdmin, deleteCategory } from "@/services/categoryService";
import PaginationComponent from "@/components/client/Pagination";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { DeleteButton } from "@/components/admin/DeleteButton";

export const CategoryTable = (props) => {
  const { keyword, status } = props;
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const { data } = useQuery({
    queryKey: ["categoriesAdmin", keyword, status, page],
    queryFn: () => categoriesAdmin(keyword, status, page),
    retry: false,
  });

  const onChangePage = (pageNumber) => {
    setSearchParams({ search: keyword, status: status, page: pageNumber });
    setPage(pageNumber);
  };

  const resetApi = () => {
    queryClient.invalidateQueries({
      queryKey: ["categoriesAdmin"],
    });
  };

  return (
    <div className="overflow-x-auto w-full">
      {/* ✅ Desktop/Table view */}
      <table className="hidden lg:table min-w-full border-collapse border bg-white rounded-xl shadow-md text-[15px]">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Tên danh mục
            </th>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Hình ảnh
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
          {data?.data?.data?.map((item, index) => (
            <tr
              key={item.id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 transition-all`}
            >
              <td className="px-4 py-3 font-medium text-xl">{item.name}</td>
              <td className="px-4 py-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md border"
                />
              </td>
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
                {item.createdBy}
              </td>
              <td className="px-4 py-3 max-[1400px]:hidden text-xl">
                {item.updatedBy}
              </td>
              <td className="px-4 py-3 text-center">
                <div className="flex justify-center gap-2">
                  <Link to={`/admin/category/edit/${item.id}`}>
                    <button className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                      <Edit3 size={18} />
                    </button>
                  </Link>
                  <DeleteButton
                    itemId={item.id}
                    funcApi={deleteCategory}
                    callBack={resetApi}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Mobile view */}
      <div className="lg:hidden flex flex-col gap-4 mt-3">
        {data?.data?.data?.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
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

            <div className="flex items-center gap-3 mb-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-md border object-cover"
              />
              <div className="text-sm text-gray-700 flex flex-col gap-1">
                <span>
                  <strong>Ngày tạo:</strong> {item.createdAtFormat}
                </span>
                <span>
                  <strong>Người tạo:</strong> {item.createdBy}
                </span>
                <span>
                  <strong>Người sửa:</strong> {item.updatedBy}
                </span>
              </div>
            </div>

            <div className="flex justify-end items-center mt-2">
              <div className="flex ">
                <Link to={`/admin/category/edit/${item.id}`}>
                  <button className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                    <Edit3 size={18} />
                  </button>
                </Link>
                <DeleteButton
                  itemId={item.id}
                  funcApi={deleteCategory}
                  callBack={resetApi}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Pagination */}
      <div className="mt-4">
        <PaginationComponent
          pages={data?.data?.totalPage || 1}
          onChangePage={onChangePage}
        />
      </div>
    </div>
  );
};
