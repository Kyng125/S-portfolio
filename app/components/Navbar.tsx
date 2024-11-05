"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Modal from "./Modal";

const Navbar = () => {
  const [isAboutModalVisible, setIsAboutModalVisible] = useState(false);
  const [isServicesModalVisible, setIsServicesModalVisible] = useState(false);
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/home/contact");
  };

  const handleServicesClick = () => {
    setIsServicesModalVisible(true);
    setIsAboutModalVisible(false);
    console.log(isServicesModalVisible);
  };

  const handleAboutClick = () => {
    setIsAboutModalVisible(true);
    setIsServicesModalVisible(false);
    console.log(isAboutModalVisible);
  };

  const handleNameClick = () => {
    router.push("/");
  };

  return (
    <div>
      <div className="navbar bg-indigoPurple rounded-2xl p-5">
        <div className="flex-1">
          <p
            className="font-extrabold text-xl text cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-pink1 to-amber transition-transform duration-200 ease-linear transform hover:scale-110"
            onClick={handleNameClick}
          >
            SANERA
          </p>
        </div>
        <div className="flex justify-evenly gap-5 lg:gap-14 text-sm font-bold">
          <div
            className="uppercase relative inline-block cursor-pointer transition-transform duration-500 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink1 hover:to-amber"
            onClick={handleAboutClick}
          >
            About
          </div>

          <div
            className="uppercase relative inline-block cursor-pointer transition-transform duration-500 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink1 hover:to-amber"
            onClick={handleServicesClick}
          >
            Services
          </div>

          <div
            className="uppercase relative inline-block cursor-pointer transition-transform duration-500 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink1 hover:to-amber"
            onClick={handleContactClick}
          >
            Contact
          </div>
        </div>
      </div>
      {isAboutModalVisible && (
        <Modal
          className="text-customGold text-3xl uppercase border border-customGold rounded-box p-6 flex flex-col text-center items-center bg-base-300 bg-opacity-60"
          content={<div className="flex flex-col items-center">Loading...</div>}
          onClose={() => setIsAboutModalVisible(false)}
        />
      )}
      {isServicesModalVisible && (
        <Modal
          className="text-customGold text-3xl uppercase border border-customGold rounded-box p-6 flex flex-col text-center items-center bg-base-300 bg-opacity-60"
          content={<div className="flex flex-col items-center">Loading...</div>}
          onClose={() => setIsServicesModalVisible(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
