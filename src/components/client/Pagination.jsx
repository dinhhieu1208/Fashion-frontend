import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react";

export default function PaginationComponent(props) {
  const { pages, onChangePage } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const callBack = (pageNumber) => {
    setCurrentPage(pageNumber);
    onChangePage(pageNumber);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) callBack(currentPage - 1);
            }}
            className={"cursor-pointer"}
          />
        </PaginationItem>
        {Array(pages).fill("").map((item, index) => (
          <PaginationItem key={index}>
            <PaginationLink className={"cursor-pointer"} isActive={index + 1 === currentPage} onClick={() => callBack(index + 1)}>{index + 1}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={(e) => {
              e.preventDefault();
              if (currentPage >= 1 && currentPage < pages) callBack(currentPage + 1);
            }}
            className={"cursor-pointer"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
