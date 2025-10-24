import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent({ pages, currentPage, onChangePage }) {

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= pages) {
      onChangePage(pageNumber);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Nút Previous */}
        <PaginationItem>
          <PaginationPrevious
            onClick={(e) => {
              e.preventDefault();
              goToPage(currentPage - 1);
            }}
            className={`cursor-pointer ${
              currentPage === 1 ? "opacity-50 pointer-events-none" : ""
            }`}
          />
        </PaginationItem>

        {/* Danh sách trang */}
        {Array.from({ length: pages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => goToPage(index + 1)}
              isActive={index + 1 === currentPage}
              className={`cursor-pointer ${
                index + 1 === currentPage ? "bg-black text-white" : ""
              }`}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Nút Next */}
        <PaginationItem>
          <PaginationNext
            onClick={(e) => {
              e.preventDefault();
              goToPage(currentPage + 1);
            }}
            className={`cursor-pointer ${
              currentPage === pages ? "opacity-50 pointer-events-none" : ""
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}