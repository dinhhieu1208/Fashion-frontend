import React from 'react'

export const CategoryTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-md">
        <thead className="bg-white text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold w-64">Name</th>
            <th className="px-4 py-2 text-left text-sm font-semibold w-32">Status</th>
            <th className="px-4 py-2 text-left text-sm font-semibold w-40">Created At</th>
            <th className="px-4 py-2 text-left text-sm font-semibold w-40">Created By</th>
            <th className="px-4 py-2 text-center text-sm font-semibold w-40">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50 transition]">
            <td className="px-4 py-2 text-sm sm:h-16">Category A with longer name</td>
            <td className="px-4 py-2 text-sm sm:h-16">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
                Active
              </span>
            </td>
            <td className="px-4 py-2 text-sm sm:h-16">2025-09-13</td>
            <td className="px-4 py-2 text-sm sm:h-16">Admin</td>
            <td className="px-4 py-2 text-center">
              <button className="px-3 py-1 text-xs rounded-md bg-blue-500 text-white hover:bg-blue-600">
                Edit
              </button>
              <button className="ml-2 px-3 py-1 text-xs rounded-md bg-red-500 text-white hover:bg-red-600">
                Delete
              </button>
            </td>
          </tr>

          <tr className="hover:bg-gray-50 transition">
            <td className="px-4 py-2 text-sm sm:h-16">Category A with longer name</td>
            <td className="px-4 py-2 text-sm sm:h-16">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
                Active
              </span>
            </td>
            <td className="px-4 py-2 text-sm sm:h-16">2025-09-13</td>
            <td className="px-4 py-2 text-sm sm:h-16">Admin</td>
            <td className="px-4 py-2 text-center">
              <button className="px-3 py-1 text-xs rounded-md bg-blue-500 text-white hover:bg-blue-600">
                Edit
              </button>
              <button className="ml-2 px-3 py-1 text-xs rounded-md bg-red-500 text-white hover:bg-red-600">
                Delete
              </button>
            </td>
          </tr>


          <tr className="hover:bg-gray-50 transition">
            <td className="px-4 py-2 text-sm sm:h-16">Category A with longer name</td>
            <td className="px-4 py-2 text-sm sm:h-16">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
                Active
              </span>
            </td>
            <td className="px-4 py-2 text-sm sm:h-16">2025-09-13</td>
            <td className="px-4 py-2 text-sm sm:h-16">Admin</td>
            <td className="px-4 py-2 text-center">
              <button className="px-3 py-1 text-xs rounded-md bg-blue-500 text-white hover:bg-blue-600">
                Edit
              </button>
              <button className="ml-2 px-3 py-1 text-xs rounded-md bg-red-500 text-white hover:bg-red-600">
                Delete
              </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>

  );
}