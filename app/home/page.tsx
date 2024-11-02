"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

const handleClick = () => {
  console.log("message");
};

const home = () => {
  return (
    <div className="h-full p-5">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-wrap mt-5">
        <div className="flex lg:flex-1 flex-wrap justify-center mr-5">
          <div className="flex flex-row p-2 mb-5 rounded-box w-full">
            <div className="card bg-weirdWhite text-primary-content flex flex-grow mr-5">
              <div className="card-body">
                <h2 className="card-title">About Me</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum provident ea adipisci vel exercitationem dicta, ullam
                  laboriosam, sint, magnam eaque sequi facilis pariatur tenetur
                  voluptatum quibusdam! Placeat, consectetur. Recusandae,
                  laborum!
                </p>
              </div>
              <div className="card-body">
                <h2 className="card-title text-sm text-pink1">
                  What else do I have to say?
                </h2>
                <p className="font-bold">
                  The path to <span className="text-pink1">enlightenment</span>{" "}
                  is paved with the footsteps of those who dared to try
                </p>
              </div>
            </div>
            <div className="card lg:w-56 w-48 min-w-48 relative overflow-hidden">
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
            <div className="card bg-weirdWhite text-primary-content mr-5 flex flex-1">
              <div className="card-body">
                <div className="justify-items-center mb-10">
                  <h2 className="card-title uppercase">Portfolio</h2>
                  <p className="font-extrabold">&</p>
                  <p className="text-pink1">resume</p>
                </div>
                <div className="card-actions justify-center">
                  <button className="btn bg-indigoPurple border-none text-white uppercase font-bold transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer hover:bg-amber hover:text-black">
                    View
                  </button>
                </div>
              </div>
            </div>

            <div
              className="card bg-electricPurple relative text-primary-content flex flex-1 transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer"
              onClick={handleClick}
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
          <div className="card bg-weirdWhite text-primary-content w-full lg:w-96 mb-5">
            <div className="card-body items-center">
              <h2 className="card-title mb-10">
                SERVICE<span className="text-electricPurple">info</span>
              </h2>
              <div className="flex flex-col text-white text-2xl font-bold items-center">
                <p className="mb-5 bg-indigoPurple p-5 rounded-box transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer hover:bg-amber hover:text-black">
                  TWEETS
                </p>
                <p className="mb-5 bg-indigoPurple p-5 rounded-box transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer hover:bg-amber hover:text-black">
                  THREADS
                </p>
                <p className="mb-5 bg-indigoPurple p-5 rounded-box transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer hover:bg-amber hover:text-black">
                  SPACES & AMAs
                </p>
                <p className="mb-5 bg-indigoPurple p-5 rounded-box transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer hover:bg-amber hover:text-black">
                  SPECIAL PACKAGE
                </p>
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
    </div>
  );
};

export default home;
