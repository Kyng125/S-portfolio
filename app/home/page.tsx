"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

const Home = () => {
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

  return (
    <div className="h-full p-5">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-wrap mt-5">
        <div className="flex lg:flex-1 flex-wrap justify-center mr-5">
          <div className="flex flex-row p-2 mb-2 rounded-box w-full">
            <div className="card bg-amber text-primary-content flex flex-grow mr-5">
              <div className="card-body">
                <h2 className="card-title font-extrabold text-4xl">About Me</h2>
                <p className="font-light">
                  Hi, I&apos;m Sanera. I&apos;m a web3 enthusiast and extraordinaire.
                  Having spent a considerable amount of time honing my craft and
                  skills, and achieving standard results to prove my competence
                  and excellence, I&apos;m confident I can produce excellent results
                  in whatever you might want me to do for you.
                </p>

                <h2 className="card-title italic text-xs text-amber mt-4 text-transparent bg-clip-text bg-gradient-to-r from-pink1 to-electricPurple">
                  What else do I have to say?
                </h2>
                <p className="font-regular italic text-xs leading-relaxed">
                  &quot;Don&apos;t be afraid to take that{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink1 to-electricPurple">leap, </span>
                  Just do whatever it is you&apos;ve always wanted. You&apos;re actually
                  running out of time so stop wasting it... <br />
                  GM 🤍&quot;
                </p>
              </div>
            </div>
            <div className="card lg:w-56 w-48 min-w-48 relative overflow-hidden border-amber border-y-2">
              <div className="card-body p-0 relative h-full">
                {/* Image covers the entire card */}
                <Image
                  src="/sanera_bg.jpg"
                  alt="Sanera"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="transition-transform duration-300 transform hover:scale-110"
                />

                {/* Button positioned on top of the image */}
                <div className="bg-transparent absolute top-0 min-w-48 h-2 z-10 shadow-md shadow-black"></div>
                <div className="absolute top-2 right-2 z-10">
                  <button className="btn z-20 bg-transparent border-none">
                    <Image
                      src="/images-square-fill.svg"
                      alt="images"
                      width={20}
                      height={10}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row p-2 mb-5 rounded-box w-full">
            <div className="card bg-amber text-primary-content mr-5 flex flex-1">
              <div className="card-body">
                <div className="justify-items-center mb-10 font-extrabold">
                  <h2 className="card-title uppercase font-extrabold text-2xl">
                    Portfolio
                  </h2>
                  <p className="font-extrabold">&</p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink1 to-electricPurple">resume</p>
                </div>
                <div className="card-actions justify-center">
                  <div className="btn bg-indigoPurple border-none">
                    <button
                      className="btn bg-indigoPurple border-none text-white uppercase font-bold relative inline-block cursor-pointer transition-transform duration-200 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink1 hover:to-amber"
                      onClick={handleAboutClick}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card bg-electricPurple relative text-primary-content flex flex-1 transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink1 hover:to-amber hover:border-electricPurple"
              onClick={handleContactClick}
            >
              <div className="card-body">
                <h2 className="card-title font-extrabold text-4xl">CONTACT</h2>
                <p className="text-xl">Me</p>
              </div>
              <Image
                src="/arrow-square-out.svg"
                alt="Contact Page"
                width={20}
                height={20}
                className="absolute top-2 right-2 z-10"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full lg:w-auto rounded-box p-5">
          <div className="card bg-amber text-primary-content w-full lg:w-96 mb-5">
            <div className="card-body items-center">
              <h2 className="card-title mb-10 font-bold text-2xl">
                SERVICE<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink1 to-electricPurple">info</span>
              </h2>
              <div className="flex flex-col text-white text-2xl font-bold items-center">
                <div className="btn bg-indigoPurple border-none mb-10">
                  <button className="btn bg-indigoPurple border-none text-2xl text-white uppercase font-bold relative inline-block cursor-pointer transition-transform duration-200 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink1 hover:to-amber">
                    TWEETS
                  </button>
                </div>
                <div className="btn bg-indigoPurple border-none mb-10">
                  <button className="btn bg-indigoPurple border-none text-2xl text-white uppercase font-bold relative inline-block cursor-pointer transition-transform duration-200 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink1 hover:to-amber">
                    THREADS
                  </button>
                </div>
                <div className="btn bg-indigoPurple border-none mb-10">
                  <button className="btn bg-indigoPurple border-none text-2xl text-white uppercase font-bold relative inline-block cursor-pointer transition-transform duration-200 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink1 hover:to-amber">
                    SPACES & AMAs
                  </button>
                </div>
                <div className="btn bg-indigoPurple border-none mb-10">
                  <button className="btn bg-indigoPurple border-none text-2xl text-white uppercase font-bold relative inline-block cursor-pointer transition-transform duration-200 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink1 hover:to-amber">
                    SPECIAL PACKAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-indigoPurple p-5 rounded-box mb-5 space-x-7">
            <Image
              src="/x-logo.svg"
              alt="images"
              width={30}
              height={10}
              className="transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer"
            />
            <Image
              src="/instagram-logo.svg"
              alt="images"
              width={30}
              height={10}
              className="transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer"
            />
            <Image
              src="/whatsapp-logo.svg"
              alt="images"
              width={30}
              height={10}
              className="transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer"
            />
            <Image
              src="/telegram-logo.svg"
              alt="images"
              width={30}
              height={10}
              className="transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer"
            />
          </div>
        </div>
      </main>
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

export default Home;
