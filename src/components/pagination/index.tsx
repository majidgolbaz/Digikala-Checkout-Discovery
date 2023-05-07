import React from "react";
import clsx from "clsx";
import "../pagination/index.scss";
import { usePagination } from "../../hooks/usePagination";

interface IPaginationProps {
  customClass?: string;
  currentPage: number;
  limit: number;
  totalCount: number;
  onPageChange: (pageNumber: number) => void;
}

interface IPaginationItemProps {
  page: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const range = (start: number, end: number) => {
  return [...new Array(end)].map((_, index) => index + start);
};

const PaginationItem = ({
  page,
  currentPage,
  onPageChange,
}: IPaginationItemProps) => {
  const liClasses = clsx({
    "page-item": true,
    active: page === currentPage,
  });
  return (
    <li className={liClasses} onClick={() => onPageChange(page)}>
      <span className="page-link">{page}</span>
    </li>
  );
};

function Pagination({
  customClass = "",
  onPageChange,
  totalCount,
  currentPage,
  limit,
}: IPaginationProps) {
  const PagesCount = Math.ceil(totalCount / limit);
  const pages = range(1, PagesCount);
  console.log(pages);

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div>
      <ul className="pagination">
        {pages.map((page) => (
          <PaginationItem
            page={page}
            key={page}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
