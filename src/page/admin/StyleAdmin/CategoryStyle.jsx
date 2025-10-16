import { DeleteButton } from "@/components/admin/DeleteButton";
import PaginationComponent from "@/components/client/Pagination";
import { deleteStyle, getAllStyle } from "@/services/styleService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Edit3 } from "lucide-react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
export default function StyleTable(props) {
  const { keyword, status } = props;
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["styleList", keyword, status, page],
    queryFn: () => getAllStyle(keyword, status, page),
  });

  const callBack = (pageNumber) => {
    setPage(pageNumber);
    setSearchParams({ search: keyword, page: pageNumber, status: status });
  };

  const resetApi = () => {
    queryClient.invalidateQueries({
      queryKey: ["styleList"],
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border bg-white border-gray-200 rounded-lg overflow-hidden shadow-md text-xl mb-[10px]">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-2 text-left text-xl font-semibold w-64">
              Tên kiểu dáng
            </th>
            <th className="px-4 py-2 text-left text-xl font-semibold w-32">
              Trạng thái
            </th>

            <th className="px-4 py-2 text-center  text-xl font-semibold w-40">
              Hành động
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data?.data?.data.map((style) => (
            <tr key={style.id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-2 text-xl">{style.name}</td>
              <td className="px-4 py-2 ">
                <span
                  className={`inline-flex items-center justify-center px-4 py-2 text-lg font-semibold rounded-full ${
                    style.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {style.status === "active" ? "active" : "inactive"}
                </span>
              </td>

              <td className="px-4 py-2 text-center">
                {/* Edit button */}
                <Link to={`/admin/style/edit/${style.id}`}>
                  <button className="p-2 rounded-lg border bg-blue-400 border-gray-300 text-white hover:bg-white hover:text-black transition">
                    <Edit3 size={18} />
                  </button>
                </Link>

                {/* Delete button */}
                <DeleteButton
                  itemId={style.id}
                  funcApi={deleteStyle}
                  callBack={resetApi}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <PaginationComponent
        pages={data?.data?.totalPage || 1}
        onChangePage={callBack}
      />
    </div>
  );
}
