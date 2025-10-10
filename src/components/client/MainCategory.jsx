import { useQuery } from "@tanstack/react-query";
import { categoriesClient } from "@/services/categoryService";
import { DropdownItem } from "./SubMenu";

export const MainCategory = () => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: categoriesClient,
    retry: false,
  });
  return (
    <>
      {data?.data && data?.data.data.length > 0 && (
        <ul
          className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-lg
                 opacity-0 group-hover:opacity-100 group-hover:translate-y-0
                 transform translate-y-2 transition-all duration-300 z-50
                 pointer-events-none group-hover:pointer-events-auto"
        >
          {data?.data?.data?.map((cat) => (
            <DropdownItem key={cat.id} category={cat} />
          ))}
        </ul>
      )}
    </>
  );
};
