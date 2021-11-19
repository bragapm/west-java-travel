import React from "react";

const PageItem = ({ number, getClick, active }) => {
  return (
    <button
      className={`cursor-pointer h-8 w-8 rounded-full ${active === number ? "bg-primary" : "bg-[#E4ECF4] hover:bg-graySecondary"
        } flex items-center justify-center mx-1 focus:outline-none`}
      onClick={() => {
        getClick(number);
      }}
    >
      <p
        className={`${active === number ? "text-white" : "text-gray"
          } text-sm font-bold font-karla`}
      >
        {number}
      </p>
    </button>
  );
};

export default PageItem;
