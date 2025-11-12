import React, { useState } from "react";
import { Edit3 } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { DeleteButton } from "@/components/admin/DeleteButton";
import PaginationComponent from "@/components/client/Pagination";

const accountData = [
  {
    id: "6913b75e3587486042baeef9",
    name: "Test05",
    image:
      "https://res.cloudinary.com/dculf3koq/image/upload/v1762899806/umttgwvvdje0cnglc6u7.png",
    status: "active",
    createdBy: "admin01",
    updatedBy: "admin01",
    createdAtFormat: "05:23 12/11/2025",
    updatedAtFormat: "05:23 12/11/2025",
  },
  {
    id: "68bd3209ad6d20242dfba875",
    name: "staff01",
    image:
      "https://res.cloudinary.com/dculf3koq/image/upload/v1757229583/mhhcqjvn3bozdodslffy.png",
    status: "active",
    createdBy: "admin01",
    updatedBy: "staff01",
    createdAtFormat: "14:19 07/09/2025",
    updatedAtFormat: "14:19 28/09/2025",
  },
  {
    id: "999abc999",
    name: "staff02",
    image: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    status: "inactive",
    createdBy: "admin02",
    updatedBy: "admin02",
    createdAtFormat: "11:00 08/09/2025",
    updatedAtFormat: "09:30 09/09/2025",
  },
];

export default function AccountTable({ keyword, status }) {
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangePage = (pageNumber) => {
    setSearchParams({ search: keyword, status: status, page: pageNumber });
    setPage(pageNumber);
  };

  return (
    <div className="overflow-x-auto w-full">
      {/* ✅ Desktop/Table view */}
      <table className="hidden lg:table min-w-full border-collapse border bg-white rounded-xl shadow-md text-[15px]">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-3 text-left text-lg font-semibold">
              Tên tài khoản
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
          {accountData.map((item, index) => (
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
                  <Link to={`/admin/account/edit/${item.id}`}>
                    <button className="p-2 rounded-md bg-blue-500 text-white hover:text-black hover:bg-white">
                      <Edit3 size={18} />
                    </button>
                  </Link>
                  <DeleteButton itemId={item.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Mobile view */}
      <div className="lg:hidden flex flex-col gap-4 mt-3">
        {accountData.map((item) => (
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
                {item.status === "active" ? "Hoạt động" : "Dừng hoạt động"}
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
                  <strong>Ngày tạo:</strong> {item.createdAtFormat}
                </div>
                <div>
                  <strong>Người tạo:</strong> {item.createdBy}
                </div>
                <div>
                  <strong>Người sửa:</strong> {item.updatedBy}
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center mt-2">
              <div className="flex">
                <Link to={`/admin/account/edit/${item.id}`}>
                  <button className="p-2 rounded-md bg-blue-500 text-white hover:text-black hover:bg-white">
                    <Edit3 size={18} />
                  </button>
                </Link>
                <DeleteButton itemId={item.id} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <PaginationComponent currentPage={page} onChangePage={onChangePage} />
      </div>
    </div>
  );
}
