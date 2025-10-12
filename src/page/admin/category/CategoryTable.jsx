import { Edit3, Trash2 } from "lucide-react";
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
    <div className="overflow-x-auto ">
      <table className="min-w-full border bg-white  border-gray-200 rounded-lg overflow-hidden shadow-md text-2xl cursor-pointer">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-2 text-left text-xl font-semibold w-64">
              Tên danh mục
            </th>
            <th className="px-4 py-2 text-left text-xl font-semibold w-32">
              Hình ảnh
            </th>
            <th className="px-4 py-2 text-left text-xl font-semibold w-32">
              Trạng thái
            </th>
            <th className="px-4 py-2 text-left text-xl font-semibold w-40">
              Ngày tạo
            </th>
            <th className="px-4 py-2 text-left text-xl font-semibold w-40">
              Người tạo
            </th>
            <th className="px-4 py-2 text-left text-xl font-semibold w-40">
              Người sửa
            </th>
            <th className="px-4 py-2 text-center text-xl font-semibold w-40">
              Hành động
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data?.data &&
            data?.data?.data.map((data) => (
              <tr key={data?.data?.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-2 text-xl sm:h-16">{data.name}</td>
                <td className="px-4 py-2 text-xl sm:h-16">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-20 h-20 rounded object-cover border"
                  />
                </td>
                <td className="px-4 py-2 sm:h-16">
                  <span
                    className={`inline-flex items-center justify-center px-4 py-2 text-lg font-semibold rounded-full ${data.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                      }`}
                  >
                    {data.status}
                  </span>
                </td>

                <td className="px-4 py-2 text-sm sm:h-16">
                  {data.createdAtFormat}
                </td>
                <td className="px-4 py-2 text-xl sm:h-16">{data.createdBy}</td>
                <td className="px-4 py-2 text-xl sm:h-16">{data.updatedBy}</td>
                <td className="px-4 py-2 text-center">
                  {/* Edit button */}
                  <Link to={`/admin/category/edit/${data.id}`}>
                    <button className="p-2 rounded-lg border bg-blue-400 border-gray-300 text-white hover:bg-white hover:text-black transition">
                      <Edit3 size={18} />
                    </button>
                  </Link>

                  {/* Delete button */}
                  <DeleteButton
                    itemId={data.id}
                    funcApi={deleteCategory}
                    callBack={resetApi}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="mt-[10px]">
        <PaginationComponent
          pages={data?.data?.totalPage || 1}
          onChangePage={onChangePage}
        />
      </div>
    </div>
  );
};
