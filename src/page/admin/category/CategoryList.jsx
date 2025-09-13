import { CategoryTable } from "./CategoryTable"
import { Search } from 'lucide-react';
export const CategoryList = () => {
  return (
    <>
      <div className="p-0 sm:p-4 min-w-screen">
        <div className="mb-[20px] text-[44px] font-[700]">Danh sánh danh mục</div>
        <div className="mb-[20px] sm:flex">
          <form action="" className="w-[360px] h-[44px] flex items-center">
            <div className="flex relative left-[27px]">
              <Search className="w-[20px] h-[20px] opacity-[0.5]" />
            </div>
            <input type="text" placeholder="Search category name..." className="w-full h-full pr-[30px] pl-[40px] py-[20px] rounded-[10px] shadow-md outline-none" />
          </form>

          <div className="ml-[20px] sm:mt-0 mt-[10px]">
            <select name="" id="" defaultValue={"filter"} className="w-[130px] h-[44px] p-2 bg-white rounded-[10px] shadow-md">
              <option value="filter" disabled className="">Status filter</option>
              <option value="filter" className="">Status active</option>
              <option value="filter" className="">Status inactive</option>
            </select>
          </div>
        </div>
        <CategoryTable />
      </div>
    </>
  )
}
