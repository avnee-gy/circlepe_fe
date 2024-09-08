"use client";
import StepZero from "@/components/step0";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (position / maxScroll) * 100;
      setScrollPosition(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main>
      <div className="flex justify-evenly items-center min-h-screen px-20 md:pl-40 bg-bg-dark grad">
        {/* Left Section: Step and Description */}
        <div className="text-left text-white w-1/2">
          <h2 className="text-5xl font-medium text-[#888888]">How does</h2>
          <h2 className="text-5xl font-medium mb-4 text-[#888888]">
            it <span className="text-white">Work </span>{" "}
            <span className="text-primary-blue">?</span>
          </h2>
          <hr className="w-12 my-5 h-1 bg-primary-blue" />
          <div className="flex items-center pr-20">
            {/* <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span> */}
            <p className="text-white">
              We make it possible in a quick and easy few steps process, takes
              max 5 mins
            </p>
          </div>
          {/* Dotted arrow */}
        </div>

        <div className="w-1/2 bg-white relative">
          {/* Scrollbar on the right */}
          <div className="absolute right-8 top-1/2 h-1/2 w-1 bg-gray-100 rounded-full transform -translate-y-1/2">
            <div
              className="w-3 h-3 bg-white rounded-full absolute right-0 transform -translate-x-0"
              style={{ top: `${scrollPosition}%` }}
            ></div>
          </div>
        </div>

        {/* Right Section: Mobile Mockup */}
        <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-80 h-[570px] bg-black rounded-[3rem] border-4 border-gray-800 p-2 relative">
            <div className="w-full h-8 bg-black absolute top-0 left-0 rounded-t-[3rem] flex justify-center">
              <div className="w-1/3 h-6 bg-black absolute top-0 rounded-b-xl"></div>
            </div>
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
              <StepZero />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
