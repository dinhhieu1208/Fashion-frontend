import { categoriesClient } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";
import { CategorySearchSub } from "./CategorySearchSub";

export const CategorySearch = (props) => {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: categoriesClient,
    retry: false,
  });

  const { callBack } = props;

  const callbackProductFunc = (e) => {
    callBack(e);
  };

  return (
    <select
      className="h-full border-2 bg-white text-sm px-2 cursor-pointer rounded-[10px]"
      defaultValue={""}
      onChange={callbackProductFunc}
    >
      <option value="" disabled>
        Tìm theo danh mục
      </option>
      <option value="">Tất cả danh mục</option>

      {/* gọi đệ quy, bắt đầu từ level = 0 */}
      <CategorySearchSub
        callBack={callBack}
        data={data?.data?.data || []}
        level={0}
      />
    </select>
  );
};
