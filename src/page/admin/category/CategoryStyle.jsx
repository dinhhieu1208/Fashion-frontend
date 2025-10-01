import { Edit3, Trash2 } from "lucide-react";

export default function StyleTable() {
  const styles = [
    {
      id: 1,
      name: "Classic",
      status: "active",
    },
    {
      id: 2,
      name: "Modern",
      status: "inactive",
    },
    {
      id: 3,
      name: "Sport",
      status: "active",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border bg-white border-gray-200 rounded-lg overflow-hidden shadow-md text-xl cursor-pointer">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-2 text-left font-semibold w-64">
              Tên kiểu dáng
            </th>
            <th className="px-4 py-2 text-left font-semibold w-32">
              Trạng thái
            </th>

            <th className="px-4 py-2 text-center font-semibold w-40">
              Hành động
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {styles.map((style) => (
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
                <button className="p-2 rounded-lg border bg-blue-400 border-gray-300 text-white hover:bg-white hover:text-black transition">
                  <Edit3 size={18} />
                </button>

                {/* Delete button */}
                <button className="ml-2 p-2 rounded-lg border bg-red-400 border-gray-300 text-white hover:bg-white hover:text-black transition">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
