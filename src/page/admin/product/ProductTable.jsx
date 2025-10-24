import { Edit3 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, productAdmin } from "@/services/productService";
import PaginationComponent from "@/components/client/Pagination";
import { Link, useSearchParams } from "react-router-dom";
import { DeleteButton } from "@/components/admin/DeleteButton";

export default function ProductTable({ keyword, status }) {
  const [page, setPage] = useState(1);

  const queryClient = useQueryClient();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setPage(1);
  }, [keyword, status]);

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
    queryClient.invalidateQueries({ queryKey: ["productAdmin"] });
  };

  return (
    <div className="overflow-x-auto w-full">
      {/* ✅ Desktop/Table view */}
      <table className="hidden lg:table min-w-full border-collapse border bg-white rounded-xl shadow-md text-[15px]">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Tên sản phẩm
            </th>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Hình ảnh
            </th>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Số lượng
            </th>
            <th className="px-4 py-3 text-left text-lg font-semibold">Giá</th>
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
              <td className="px-4 py-3 font-medium  text-xl">{item.name}</td>
              <td className="px-4 py-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md border"
                />
              </td>
              <td className="px-4 py-3">{item.quantity}</td>
              <td className="px-4 py-3 text-green-600 font-semibold text-sm">
                {item.currentPrice.toLocaleString("vi-VN")}₫
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
                {item.createAtFormat}
              </td>
              <td className="px-4 py-3 max-[1300px]:hidden text-xl">
                {item.createdByFormat}
              </td>
              <td className="px-4 py-3 max-[1400px]:hidden text-xl">
                {item.updatedByFormat}
              </td>
              <td className="px-4 py-3 text-center">
                <div className="flex justify-center gap-2">
                  <Link to={`/admin/product/edit/${item.id}`}>
                    <button className="p-2 rounded-md bg-blue-500 text-white hover:text-black hover:bg-white">
                      <Edit3 size={18} />
                    </button>
                  </Link>
                  <DeleteButton
                    itemId={item.id}
                    funcApi={deleteProduct}
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
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-800 text-lg">
                {item.name}
              </h3>
              <span
                className={`text-sm font-semibold px-3 py-1  rounded-full ${
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
              <div className="text-sm text-gray-700">
                <div>
                  <strong>Giá:</strong>{" "}
                  {item.currentPrice.toLocaleString("vi-VN")}₫
                </div>
                <div>
                  <strong>Số lượng:</strong> {item.quantity}
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-600 flex flex-col gap-1 mb-2">
              <span>
                <strong>Ngày tạo:</strong> {item.createAtFormat}
              </span>
              <span>
                <strong>Người tạo:</strong> {item.createdByFormat}
              </span>
              <span>
                <strong>Người sửa:</strong> {item.updatedByFormat}
              </span>
            </div>

            <div className="flex justify-end items-center mt-2">
              <div className="flex ">
                <Link to={`/admin/product/edit/${item.id}`}>
                  <button className="p-2 rounded-md bg-blue-500 text-white  hover:text-black hover:bg-white">
                    <Edit3 size={18} />
                  </button>
                </Link>
                <DeleteButton
                  itemId={item.id}
                  funcApi={deleteProduct}
                  callBack={resetApi}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <PaginationComponent
          pages={data?.data?.totalPage || 1}
          currentPage={page}
          onChangePage={onChangePage}
        />
      </div>
    </div>
  );
}
