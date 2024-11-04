"use client";

import React from "react";

const Navbar = () => {
  const handleClick = () => {
    console.log("message");
  };

  return (
    <div>
      <div className="navbar bg-indigoPurple rounded-2xl p-5">
        <div className="flex-1">
          <a className="font-extrabold text-xl">SANERA</a>
        </div>
        <div className="flex justify-evenly gap-5 lg:gap-14 text-sm font-bold">
          <div
            className="uppercase relative inline-block cursor-pointer transition-transform duration-500 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink1 hover:to-amber"
            onClick={handleClick}
          >
            About
          </div>

          <div
            className="uppercase relative inline-block cursor-pointer transition-transform duration-500 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink1 hover:to-amber"
            onClick={handleClick}
          >
            Services
          </div>

          <div
            className="uppercase relative inline-block cursor-pointer transition-transform duration-500 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink1 hover:to-amber"
            onClick={handleClick}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
