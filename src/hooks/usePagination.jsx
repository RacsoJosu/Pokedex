import { useState, useEffect } from "react";
export function usePagination({ data, itemsPerPage = 10, searchValue }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  useEffect(() => {
    setCurrentPage(1); // Reiniciar a la página 1 cuando cambian los datos
  }, [searchValue]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return { currentData, currentPage, totalPages, handlePageChange };
}
