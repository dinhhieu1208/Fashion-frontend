import { useState } from "react";
import { Search } from "lucide-react";
import { CustomerTable } from "./customerTable.jsx";

export const CustomerList = () => {
  const [keyword, setKeyword] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target.search.value);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setTypeFilter(e.target.value);
  };

  return (
    <div className="p-0 sm:p-4 min-w-screen">
      <div className="mb-[20px] text-[44px] font-[700]">
        Danh sách khách hàng
      </div>

      <div className="mb-[20px] sm:flex">
        <form
          className="w-[360px] h-[44px] flex items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex relative left-[27px]">
            <Search className="w-[20px] h-[20px] opacity-[0.5]" />
          </div>
          <input
            type="text"
            placeholder="Tìm theo tên hoặc email khách hàng..."
            className="w-full h-full pr-[30px] pl-[40px] py-[20px] rounded-[10px] shadow-md outline-none"
            name="search"
          />
        </form>

        {/* Bộ lọc loại khách hàng */}
        <div className="ml-[20px] sm:mt-0 mt-[10px]">
          <select
            defaultValue={typeFilter}
            className="w-[220px] h-[44px] p-2 bg-white rounded-[10px] shadow-md"
            onChange={handleOnChange}
          >
            <option disabled className="">
              Lọc trạng thái khách hàng
            </option>
            <option value="">Lọc tất cả khách hàng</option>
            <option value="active" className="">
              Hoạt động
            </option>
            <option value="inactive" className="">
              Dừng hoạt động
            </option>
          </select>
        </div>
      </div>

      {/* Bảng danh sách khách hàng */}
      <CustomerTable keyword={keyword} type={typeFilter} />
    </div>
  );
};
