import React from "react";

import { LeftContainer } from "./LeftContainer";
import { RightSide } from "./RightContainer";
import { Search } from "./Search";

export const Wrapper = ({ weatherData, handleSearch }) => {
  return (
    <div className="flex flex-col items-center gap-16 relative">
      <Search handleSearch={handleSearch} />
      {/* <Search onSearch={handleSearch} /> */}
      <div className="h-[523px] w-[944px] bg-[#222831] rounded-3xl">
        <LeftContainer weatherData={weatherData} />
        <RightSide weatherData={weatherData} />
      </div>
    </div>
  );
};
