import { useState } from "react";
import ProductTable from "./ProductTable";
import { ImageMinus, Search } from "lucide-react";

export const ProductList = () => {
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
      <div className="mb-[20px] text-[44px] font-[700]">Danh sách sản phẩm</div>

      <div className="mb-[20px] sm:flex">
        {/* Ô tìm kiếm */}
        <form
          action=""
          className="w-[360px] h-[44px] flex items-center"
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

        <div className="ml-[20px] sm:mt-0 mt-[10px]">
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
