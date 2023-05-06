import React from "react";
import clsx from "clsx";
import "../pagination/index.scss";
import { usePagination } from "../../hooks/usePagination";

interface IPaginationProps {
  customClass?: string;
  currentPage: number;
  pageSize: number;
  totalCount: number;
  siblingCount: number;
  onPageChange: (pageNumber: number) => void;
}

function Pagination({
  customClass = "",
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: IPaginationProps) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="pagination-container">
      {/* Left navigation arrow */}
      <li
        className={clsx("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber) => {
        return (
          <li
            className={clsx("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={clsx("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
}

export default Pagination;
