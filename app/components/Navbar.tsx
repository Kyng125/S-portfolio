'use client'

import React from "react";

const Navbar = () => {
  const handleClick = () => {
    console.log("message")
  }

  return (
    <div>
      <div className="navbar bg-indigoPurple rounded-2xl p-5">
        <div className="flex-1">
          <a className="font-extrabold text-xl">SANERA</a>
        </div>
        <div className="flex justify-evenly gap-5 lg:gap-14 text-sm font-semibold">
          {/* <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button> */}
          <div className="uppercase transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer" onClick={handleClick}>About</div>
          <div className="uppercase transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer" onClick={handleClick}>Services</div>
          <div className="uppercase transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer" onClick={handleClick}>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
