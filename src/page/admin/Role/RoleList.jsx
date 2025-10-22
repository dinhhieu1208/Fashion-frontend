import { useState } from "react";
import RoleTable from "./RoleTable";
import { Search } from "lucide-react";

export const RoleList = () => {
  const [keyword, setKeyword] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target.search.value);
  };

  console.log(keyword);

  const handleOnChange = (e) => {
    e.preventDefault();
    setStatusFilter(e.target.value);
  };
  console.log(statusFilter);

  return (
    <div className="p-0 sm:p-4 min-w-screen">
      {/* Tiêu đề trang */}
      <div className="mb-[20px] text-[44px] font-[700]">
        Danh sách quản trị viên
      </div>

      {/* Thanh tìm kiếm + bộ lọc */}
      <div className="mb-[20px] flex items-center gap-3">
        {/* Ô tìm kiếm */}
        <form
          action=""
          className="flex items-center h-[44px] sm:mt-[10px] md:mb-[10px]"
          onSubmit={handleSubmit}
        >
          <div className="flex relative left-[27px]">
            <Search className="w-[20px] h-[20px] opacity-[0.5]" />
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm tên vai trò..."
            className="w-full h-full pr-[30px] pl-[40px] py-[20px] rounded-[10px] shadow-md outline-none"
            name="search"
          />
        </form>

        {/* Bộ lọc trạng thái */}
        <div className="ml-[20px] sm:mt-0 flex items-center">
          <select
            defaultValue={statusFilter}
            className="w-[200px] h-[44px] p-2 bg-white rounded-[10px] shadow-md"
            onChange={handleOnChange}
          >
            <option disabled>Lọc trạng thái</option>
            <option value="">Tất cả trạng thái</option>
            <option value="active">Hoạt động</option>
            <option value="inactive">Dừng hoạt động</option>
          </select>
        </div>
      </div>

      {/* Bảng dữ liệu vai trò */}
      <RoleTable keyword={keyword} status={statusFilter} />
    </div>
  );
};
