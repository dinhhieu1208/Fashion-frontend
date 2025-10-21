import { useState } from "react";
import { Search } from "lucide-react";
import { CustomerTable } from "./customerTable";
import { useSearchParams } from "react-router-dom";

export const CustomerList = () => {
  const [keyword, setKeyword] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({
      search: e.target.search.value,
      status: typeFilter,
    });
    setKeyword(e.target.search.value);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchParams({
      search: keyword,
      status: e.target.value,
    });
    setTypeFilter(e.target.value);
  };

  return (
    <div className="p-0 sm:p-4 min-w-screen">
      <div className="mb-[20px] text-[44px] font-[700]">
        Danh sách khách hàng
      </div>

      <div className="mb-[20px]  flex items-center gap-3 ">
        <form
          action=""
          className=" flex items-center h-[44px] sm:mt-[10px] md:mb-[10px] "
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
        <div className="ml-[20px] sm:mt-0 flex items-center">
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
      <CustomerTable keyword={keyword} status={typeFilter} />
    </div>
  );
};
