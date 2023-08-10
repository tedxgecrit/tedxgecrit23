import React from "react";

export default function Graphics() {
  return (
    <div className="relative h-[320px] w-full overflow-clip rounded-xl">
      <div className="ease absolute left-0 top-0 flex h-full w-screen bg-swirls_home bg-cover duration-200 "></div>
      <div className="absolute bottom-3 left-0 lg:left-3">
        <div className="theme_text flex flex-col justify-end pl-[40px] uppercase">
          <div className="text-[30px] font-bold leading-[100%] lg:text-[50px]">
            unravelling
          </div>
          <div className="flex flex-col text-[95px] font-bold leading-[85%] md:flex-row md:text-[100px] lg:text-[160px]">
            <div>PARA</div>
            <div>DOXES</div>
          </div>
        </div>
      </div>
    </div>
  );
}
