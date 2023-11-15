import React from "react";

export const Search = () => {
  return (
    <div className="px-6 flex items-center justify-center py-8 w-full">
      <input
        type="text"
        placeholder="search city"
        className="h-16 w-[939px] rounded-2xl border-solid border text-[#E7E7E7] border-[#E7E7E7] bg-transparent outline-none p-5"
      />
    </div>
  );
};
