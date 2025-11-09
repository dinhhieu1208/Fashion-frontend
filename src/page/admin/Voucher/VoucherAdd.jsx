import { voucherAdd } from "@/services/voucherService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const VoucherAdd = () => {

  const mutation = useMutation({
    mutationFn: voucherAdd,
    onSuccess: () => {
      toast.success("Thêm mã giảm giá thành công");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Thêm mã giảm giá thất bại")
    }
  })
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const discount = formData.get("discount");
    const startDay = formData.get("startDay");
    const endDay = formData.get("endDay");
    const status = formData.get("status");

    const data = {
      name,
      discount,
      startDay,
      endDay,
      status,
    };

    console.log("Voucher data submitted:", data);
    mutation.mutate(data);
  };

  return (
    <div>
      <h1 className="p-4 sm:p-6 mb-4 text-3xl font-bold">Thêm voucher mới</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-5 p-4 mb-4 bg-white rounded-lg shadow"
      >
        {/* Tên Voucher */}
        <div>
          <label className="block mb-1 font-medium">Tên voucher</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-md p-2"
            placeholder="Nhập tên voucher "
            required
          />
        </div>

        {/* Mức giảm giá */}
        <div>
          <label className="block mb-1 font-medium">Giảm giá</label>
          <input
            type="text"
            name="discount"
            className="w-full border rounded-md p-2"
            placeholder="VD: 10%"
            required
          />
        </div>

        {/* Ngày bắt đầu */}
        <div>
          <label className="block mb-1 font-medium">Ngày bắt đầu</label>
          <input
            type="date"
            name="startDay"
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* Ngày kết thúc */}
        <div>
          <label className="block mb-1 font-medium">Ngày kết thúc</label>
          <input
            type="date"
            name="endDay"
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* Trạng thái */}
        <div>
          <label className="block mb-1 font-medium">Trạng thái</label>
          <select name="status" className="w-full border rounded-md p-2">
            <option value="active">Hoạt động</option>
            <option value="inactive">Ngừng hoạt động</option>
          </select>
        </div>

        {/* Nút submit */}
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-600"
        >
          Tạo voucher
        </button>
      </form>
    </div>
  );
};
