import { Edit3 } from "lucide-react";
import React from "react";
import { DeleteButton } from "@/components/admin/DeleteButton";
export const CustomerTable = () => {
  const data = [
    {
      id: "68c54e226948629b3f5cb74b",
      fullName: "Nguyễn Đình Hiếu",
      email: "nguyenhieu96hth@gmail.com",
      status: "active",
      createdAt: "17:57 13/09/2025",
    },
    {
      id: "68c512494a1f6ae6d71b0ab5",
      fullName: "Lam Thanh Duy",
      email: "test@gmail.com",
      image:
        "https://res.cloudinary.com/dculf3koq/image/upload/v1758074112/fxzgy46l5pwvrxjzodam.jpg",
      status: "active",
      createdAt: "13:42 13/09/2025",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border bg-white border-gray-200 rounded-lg overflow-hidden shadow-md text-sm sm:text-lg">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-2 text-left font-semibold w-64">
              Họ và tên
            </th>
            <th className="px-4 py-2 text-left font-semibold w-64">Email</th>
            <th className="px-4 py-2 text-left font-semibold w-32">
              Ảnh đại diện
            </th>
            <th className="px-4 py-2 text-left font-semibold w-32">
              Trạng thái
            </th>
            <th className="px-4 py-2 text-left font-semibold w-40">Ngày tạo</th>
            <th className="px-4 py-2 text-center font-semibold w-40">
              Hành động
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-2 text-lg">{item.fullName}</td>
              <td className="px-4 py-2 text-lg">{item.email}</td>
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
                  className={`inline-flex items-center text-xl justify-center px-4 py-2  font-semibold rounded-full ${
                    item.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="px-4 py-2 text-lg">{item.createdAt}</td>

              <td className="px-4 py-2 text-center">
                <button className="p-2 rounded-lg border bg-blue-400 border-gray-300 text-white hover:bg-white hover:text-black transition">
                  <Edit3 size={18} />
                </button>
                <DeleteButton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
