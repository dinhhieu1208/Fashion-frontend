import { useState } from "react";
import { Trash2, X } from "lucide-react";

export default function DeleteComfirm() {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    console.log("Sản phẩm đã được xóa thành công!");
    setOpen(false);
  };

  return (
    <>
      {/* Nút xóa */}
      <button
        onClick={() => setOpen(true)}
        className="ml-2 p-2 rounded-lg border bg-red-500 border-gray-300 text-white hover:bg-red-600 transition"
      >
        <Trash2 size={18} />
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-[400px] p-6 relative">
            {/* Nút đóng */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>

            {/* Icon cảnh báo */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-red-500">
                <X className="text-red-500" size={36} />
              </div>
            </div>

            {/* Nội dung */}
            <h2 className="text-3xl font-semibold text-center">Xác nhận xóa</h2>
            <p className="text-gray-600 text-center mt-2 text-xl">
              Bạn có chắc chắn muốn xóa sản phẩm quần áo này không?
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Hủy
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
