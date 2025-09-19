import { Link } from "react-router-dom";

export const DropdownItem = ({ category }) => {
  return (
    <li className="px-4 py-2 hover:bg-gray-100 relative group/sub">
      <Link to={`/category/${category.id}`}>{category.name}</Link>

      {/* Nếu có children thì render tiếp */}
      {category.children?.length > 0 && (
        <ul className="absolute left-full top-0 ml-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover/sub:opacity-100 transform translate-y-2 group-hover/sub:translate-y-0 transition-all duration-300">
          {category.children.map((child) => (
            <DropdownItem key={child.id} category={child} />
          ))}
        </ul>
      )}
    </li>
  );
};
