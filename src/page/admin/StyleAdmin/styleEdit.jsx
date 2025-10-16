import { styleDetail, styleEdit } from "@/services/styleService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export default function EditStyle() {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["getOneStyle", id],
    queryFn: () => styleDetail(id),
    retry: false,
    refetchOnMount: true
  });

  const mutation = useMutation({
    mutationFn: ({id, data}) => styleEdit(id, data),
    onSuccess: () => {
      toast.success("Cập nhật kiểu dáng thành công");
      queryClient.invalidateQueries(["getOneStyle", id])
      navigate("/admin/style/list")
    },
    onError: (error) => {
      console.log(error);
      toast.error("Cập nhật kiểu dáng thất bại");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const status = e.target.status.value;

    const data = {
      name: name,
      status: status,
    };

    mutation.mutate({
      id: id,
      data: data
    });
  };

  if (isLoading) {
    return <div>Đang tải dữ liệu</div>
  };

  return (
    <>
      <h1 className="p-4 sm:p-6 mb-4 text-3xl font-bold">Cập nhật kiểu dáng mới</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-[1400px] mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Tên kiểu dáng</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Nhập tên kiểu dáng"
            defaultValue={data?.data?.name}
          />
        </div>

        {/* Status */}
        <div>
          <label className="block mb-1 font-medium">Trạng thái</label>
          <select
            name="status"
            className="w-full border border-gray-300 rounded-md p-2"
            defaultValue={data?.data?.status}
          >
            <option value="active">Hoạt động</option>
            <option value="inactive">Ngừng hoạt động</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-400"
        >
          Cập nhật kiểu dáng
        </button>
      </form>
    </>
  );
}