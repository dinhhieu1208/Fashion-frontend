import { useState } from "react";
import { Search } from "lucide-react";

import { OrderTable } from "./orderTable.jsx";

export const OrderList = () => {
  const [keyword, setKeyword] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target.search.value);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setStatusFilter(e.target.value);
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
            placeholder="Tìm theo mã đơn hàng hoặc tên khách hàng..."
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
            <option disabled>Lọc trạng thái đơn hàng</option>
            <option value="">Tất cả trạng thái</option>
            <option value="pending">Chờ xác nhận</option>
            <option value="confirmed">Đã xác nhận</option>
            <option value="shipping">Đang giao</option>
            <option value="delivered">Đã giao</option>
            <option value="cancelled">Đã hủy</option>
          </select>
        </div>
      </div>

      {/* Bảng danh sách đơn hàng */}
      <OrderTable keyword={keyword} status={statusFilter} />
    </div>
  );
};
