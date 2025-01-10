"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

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
      <div className="navbar bg-indigoPurple rounded-2xl p-5 shadow-md shadow-black fixed top-3 left-3 right-2 box-border w-full z-50">
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
          className="text-3xl border-2 shadow-sm shadow-pink1 border-indigoPurple rounded-box px-10 pb-10 pt-6 flex flex-col text-center items-center bg-black bg-opacity-100"
          content={
            <div className="flex flex-col items-center">
              <div className="mb-5">
                <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-electricPurple via-pink1 to-amber">
                  ABOUT ME
                </h1>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex-1">
                  <Image
                    src="/sanera_bg.jpg"
                    alt="Sanera"
                    // layout="fill"
                    // objectFit="cover"
                    width={250}
                    height={150}
                    priority
                    className="transition-transform duration-300 transform hover:scale-110 rounded-box "
                  />
                </div>
                <div className="flex-1 text-lg">
                  <p className="font-light">
                    Hi guys, I&apos;m Sanera. I&apos;m a web3 enthusiast and
                    extraordinaire. Having spent a considerable amount of time
                    honing my craft and skills, and achieving standard results
                    to prove my competence and excellence, I&apos;m confident I
                    can produce excellent results in whatever you might want me
                    to do for you.
                  </p>
                </div>
              </div>
            </div>
          }
          onClose={() => setIsAboutModalVisible(false)}
        />
      )}
      {isServicesModalVisible && (
        <Modal
          className="text-3xl border-2 shadow-sm shadow-pink1 border-indigoPurple rounded-box p-6 flex flex-col text-center items-center bg-black bg-opacity-100"
          content={<div className="flex flex-col items-center">Loading...</div>}
          onClose={() => setIsServicesModalVisible(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
