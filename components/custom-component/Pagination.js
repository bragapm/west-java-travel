import React from "react";

import PageItem from "./PageItem";
import paginate from "jw-paginate";

const Pagination = ({ total, currentPage, pageSize, getCurrent }) => {
  const [hasil, setHasil] = React.useState({ totalPages: 5, pages: [1] });
  const handleClick = React.useCallback((number) => {
    getCurrent(number);
  }, []);

  React.useEffect(() => {
    let page = paginate(total, currentPage, pageSize, 5);
    setHasil(page);
  }, [total, currentPage, pageSize]);

  const pages = React.useCallback(() => {
    if (hasil.pages) {
      let viewPage = hasil.pages;
      return (
        <div className='flex justify-between items-center'>
          {viewPage.map((item) => (
            <PageItem
              key={item}
              number={item}
              getClick={handleClick}
              active={currentPage}
            />
          ))}
        </div>
      );
    }
  }, [hasil, handleClick, currentPage]);

  return (
    <div className='flex justify-center space-x-2 '>
      <button
        className={`focus:outline-none  ${currentPage === 1 ? "opacity-25" : "hover:bg-graySecondary rounded-md"
          }`}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <p className='h-8 px-3 leading-none text-sm font-main cursor-pointer flex items-center font-bold font-karla text-gray'>
          Prev
        </p>
      </button>
      {pages()}
      <button
        className={`focus:outline-none  ${currentPage === hasil.totalPages
          ? "opacity-25"
          : "hover:bg-graySecondary rounded-md"
          }`}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === hasil.totalPages}
      >
        <p className='h-8 px-3 leading-none text-sm font-main cursor-pointer flex items-center font-bold font-karla text-gray'>
          Next
        </p>
      </button>
    </div>
  );
};

export default Pagination;
