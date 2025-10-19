import { useState } from "react";
import { Search } from "lucide-react";
import { OrderTable } from "./orderTable.jsx";
import { useSearchParams } from "react-router-dom";


export const OrderList = () => {
  const [keyword, setKeyword] = useState("");
  const [statusFilter, setStatusFilter] = useState("asc");
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value.trim();
    setKeyword(searchValue);
    setSearchParams({ search: searchValue, status: statusFilter });
  };

  const handleOnChange = (e) => {
    const newStatus = e.target.value;
    setStatusFilter(newStatus);
    setSearchParams({ search: keyword, status: newStatus });
  };

  return (
    <div className="p-0 sm:p-4 min-w-screen">
      {/* Tiêu đề */}
      <div className="mb-[20px] text-[44px] font-[700]">Danh sách đơn hàng</div>

      {/* Ô tìm kiếm + lọc */}
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
            placeholder="Tìm kiếm theo email của khách hàng"
            className="w-full h-full pr-[30px] pl-[40px] py-[20px] rounded-[10px] shadow-md outline-none"
            name="search"
          />
        </form>

        <div className="ml-[20px] sm:mt-0 mt-[10px]">
          <select
            defaultValue={statusFilter}
            className="w-[220px] h-[44px] p-2 bg-white rounded-[10px] shadow-md"
            onChange={handleOnChange}
          >
            <option disabled>Lọc theo giá đơn hàng</option>
            <option value="asc">Giá tăng dần</option>
            <option value="desc">Giá giảm dần</option>
          </select>
        </div>
      </div>

      {/* Bảng danh sách đơn hàng */}
      <OrderTable keyword={keyword} status={statusFilter} />
    </div>
  );
};
