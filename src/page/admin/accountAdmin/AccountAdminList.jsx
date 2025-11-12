import { useState } from "react";
import AccountTable from "./AccountAdminTable";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export const AccountList = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value.trim();
    setKeyword(value);
    setSearchParams({ search: value, status: statusFilter });
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setStatusFilter(value);
    setSearchParams({ search: keyword, status: value });
  };

  return (
    <div className="p-0 sm:p-4 min-w-screen">
      <div className="mb-[20px] text-[44px] font-[700]">
        Danh sách tài khoản
      </div>

      <div className="mb-[20px] flex items-center gap-3 flex-wrap">
        {/* Ô tìm kiếm */}
        <form className="flex items-center h-[44px]" onSubmit={handleSubmit}>
          <div className="flex relative left-[27px]">
            <Search className="w-[20px] h-[20px] opacity-[0.5]" />
          </div>
          <input
            type="text"
            placeholder="Tìm tên tài khoản..."
            className="w-[240px] sm:w-[320px] h-full pr-[30px] pl-[40px] py-[20px] rounded-[10px] shadow-md outline-none"
            name="search"
          />
        </form>

        {/* Bộ lọc */}
        <div className="ml-[20px] flex items-center">
          <select
            value={statusFilter}
            className="w-[200px] h-[44px] p-2 bg-white rounded-[10px] shadow-md"
            onChange={handleOnChange}
          >
            <option value="">Tất cả trạng thái</option>
            <option value="active">Hoạt động</option>
            <option value="inactive">Dừng hoạt động</option>
          </select>
        </div>
      </div>

      {/* Bảng tài khoản */}
      <AccountTable keyword={keyword} status={statusFilter} />
    </div>
  );
};
