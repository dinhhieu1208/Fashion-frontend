import React from "react";
import { Edit3, Trash2 } from "lucide-react";
// import clother1 from "../../../assets/images/clother-1.jpg";
import { useQuery } from "@tanstack/react-query";
import { categoriesAdmin } from "@/services/categoryService";
export const CategoryTable = () => {
  // const data1 = [
  //   {
  //     id: "68c124d5603d86a76074b257",
  //     name: "Áo sơ mi nam",
  //     image: clother1,
  //     status: "active",
  //     createdAtFormat: "14:12 10/09/2025",
  //     updatedAtFormat: "14:12 10/09/2025",
  //     createdBy: "admin01",
  //     updatedBy: "admin01",
  //   },
  //   {
  //     id: "68c11d0c72c265eb9b62fd95",
  //     name: "Áo sơ mi",
  //     image: "",
  //     status: "active",
  //     createdAtFormat: "13:39 10/09/2025",
  //     updatedAtFormat: "13:39 10/09/2025",
  //     createdBy: "admin01",
  //     updatedBy: "admin01",
  //   },
  // ];
  const { data } = useQuery({
    queryKey: ["categoriesAdmin"],
    queryFn: categoriesAdmin,
    retry: false,
  });
  console.log(data?.data?.data);

  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full border bg-white  border-gray-200 rounded-lg overflow-hidden shadow-md text-2xl cursor-pointer">
        <thead className="bg-neutral-200 text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left text-xl font-semibold w-64">
              Name
            </th>
            <th className="px-4 py-2 text-left text-xl font-semibold w-32">
              Images
            </th>
            <th className="px-4 py-2 text-left text-xl font-semibold w-32">
              Status
            </th>
            <th className="px-4 py-2 text-left text-xl font-semibold w-40">
              Created At
            </th>
            <th className="px-4 py-2 text-left text-xl font-semibold w-40">
              Created By
            </th>
            <th className="px-4 py-2 text-left text-xl font-semibold w-40">
              Updated By
            </th>
            <th className="px-4 py-2 text-center text-xl font-semibold w-40">
              Action
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
                    className={`inline-flex items-center justify-center px-4 py-2 text-lg font-semibold rounded-full ${
                      data.status === "active"
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
                  <button className="p-2 rounded-lg border bg-blue-400 border-gray-300 text-white hover:bg-white hover:text-black transition">
                    <Edit3 size={18} />
                  </button>

                  {/* Delete button */}
                  <button className="ml-2 p-2 rounded-lg border bg-red-400  border-gray-300 text-white hover:bg-white hover:text-black transition">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
