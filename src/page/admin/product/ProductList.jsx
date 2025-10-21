import { useState } from "react";
import ProductTable from "./ProductTable";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
export const ProductList = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target.search.value);
    setSearchParams({ search: e.target.search.value, status: statusFilter });
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setStatusFilter(e.target.value);
    setSearchParams({ search: keyword, status: e.target.value });
  };

  return (
    <div className="p-0 sm:p-4 min-w-screen">
      <div className="mb-[20px] text-[44px] font-[700]">Danh sách sản phẩm</div>

      <div className="mb-[20px] flex items-center gap-3">
        {/* Ô tìm kiếm */}
        <form
          action=""
          className="flex items-center h-[44px] sm:mt-[10px] md:mb-[10px] "
          onSubmit={handleSubmit}
        >
          <div className="flex relative left-[27px]">
            <Search className="w-[20px] h-[20px] opacity-[0.5]" />
          </div>
          <input
            type="text"
            placeholder="Search product name..."
            className="w-full h-full pr-[30px] pl-[40px] py-[20px] rounded-[10px] shadow-md outline-none"
            name="search"
          />
        </form>

        {/* Bộ lọc */}
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
      <ProductTable keyword={keyword} status={statusFilter} />
    </div>
  );
};
