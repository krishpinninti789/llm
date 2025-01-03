import React from "react";

const Header = () => {
  return (
    <div className="z-[99999]  absolute top-20 left-1/2 transform -translate-x-1/2 bg-[#1F1F1F] p-1 border-[#f7eee3] border-[1px] rounded-full">
      <div className="p-1 rounded-full  h-full flex gap-2">
        <img src="/logoo.png" alt="" className="w-32 h-16" />
        <div className="bg-[#F7EEE3] min-h-full flex items-center px-8 rounded-full innershadow">
          <h2 className="font-sans text-xl">Start</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
