"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/home");
  };

  return (
    <div className="h-full p-5 bg-black">
      <div className="btn bg-indigoPurple border-none">
        <button
          className="btn bg-indigoPurple border-none text-white uppercase font-bold relative inline-block cursor-pointer transition-transform duration-200 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink1 hover:to-amber"
          onClick={handleBackClick}
        >
          Back to Home
        </button>
      </div>
      <div className="flex flex-col mt-5">
        <div className="mb-5">
          <h1 className="flex font-bold mb-4 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-electricPurple via-pink1 to-amber">
            CONTACT ME
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Name"
                className="p-4 rounded-box w-full"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Email"
                className="p-4 rounded-box w-full"
              />
            </div>
          </div>
          <div>
            <div>
              <textarea name="content" id="text_content" className="p-4 rounded-box w-full"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
