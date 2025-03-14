import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium text-white">
        Hello <br /> <span className="text-3xl font-semibold"> Syed 👋 </span>
      </h1>
      <button className="px-5 py-2 text-lg font-medium text-white bg-red-600 rounded-md">
        Log Out
      </button>
    </div>
  );
};

export default Header;
