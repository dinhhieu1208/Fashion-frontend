import { Edit3 } from "lucide-react";
import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, productAdmin } from "@/services/productService";
import PaginationComponent from "@/components/client/Pagination";
import { Link, useSearchParams } from "react-router-dom";
import { DeleteButton } from "@/components/admin/DeleteButton";

export default function ProductTable(props) {
  const { keyword, status } = props;
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const { data } = useQuery({
    queryKey: ["productAdmin", keyword, status, page],
    queryFn: () => productAdmin(keyword, status, page),
    retry: false,
  });

  const onChangePage = (pageNumber) => {
    setSearchParams({ search: keyword, status: status, page: pageNumber });
    setPage(pageNumber);
  };

  const resetApi = () => {
    queryClient.invalidateQueries({
      queryKey: ["productAdmin"],
    });
  };

  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full border bg-white border-gray-200 rounded-lg overflow-hidden shadow-md text-sm sm:text-lg ">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-2 sm:px-4 py-2 text-left font-semibold w-64">
              Tên sản phẩm
            </th>
            <th className="px-2 sm:px-4 py-2 text-left font-semibold w-32">
              Hình ảnh
            </th>
            <th className="px-2 sm:px-4 py-2 text-left font-semibold w-24">
              Số lượng
            </th>
            <th className="px-2 sm:px-4 py-2 text-left font-semibold w-32">
              Giá
            </th>
            <th className="px-2 sm:px-4 py-2 text-left font-semibold w-32">
              Trạng thái
            </th>
            <th className="hidden md:table-cell px-2 sm:px-4 py-2 text-left font-semibold w-40">
              Ngày tạo
            </th>
            <th className="hidden md:table-cell px-2 sm:px-4 py-2 text-left font-semibold w-40">
              Người tạo
            </th>
            <th className="hidden lg:table-cell px-2 sm:px-4 py-2 text-left font-semibold w-40">
              Người sửa
            </th>
            <th className="px-2 sm:px-4 py-2 text-center font-semibold w-40">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data?.data &&
            data?.data?.data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition">
                <td className="px-2 sm:px-4 text-xl py-2">{item.name}</td>
                <td className="px-2 sm:px-4 text-xl py-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-20 sm:h-20 rounded object-cover border"
                  />
                </td>
                <td className="px-2 sm:px-4 text-xl py-2">{item.quantity}</td>
                <td className="px-2 sm:px-4 text-xl py-2">
                  {item.currentPrice.toLocaleString("vi-VN")}₫
                </td>
                <td className="px-4 py-2 text-xl sm:h-16">
                  <span
                    className={`inline-flex items-center justify-center px-4 py-2 text-lg font-semibold rounded-full ${
                      item.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="hidden md:table-cell px-2 sm:px-4 text-sm py-2">
                  {item.createAtFormat}
                </td>
                <td className="hidden md:table-cell px-2 sm:px-4  text-xl py-2">
                  {item.createdByFormat}
                </td>
                <td className="hidden lg:table-cell px-2 sm:px-4  text-xl py-2">
                  {item.updatedByFormat}
                </td>
                <td className=" mt-4 px-2 sm:px-4 flex justify-center py-2 text-center">
                  <Link to={`/admin/product/edit/${item.id}`}>
                    <button className="p-2 rounded-lg border bg-blue-400 border-gray-300 text-white hover:bg-white hover:text-black transition">
                      <Edit3 size={18} />
                    </button>
                  </Link>
                  <DeleteButton
                    itemId={item.id}
                    funcApi={deleteProduct}
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
}
