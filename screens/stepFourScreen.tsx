// components/StepThreeScreen.tsx
"use client";
import StepFour from "@/components/stepFour";
import React, { useState, useEffect } from "react";

const StepFourScreen: React.FC = () => {
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
    <div className="flex justify-evenly items-center min-h-screen px-20 md:pl-40 bg-bg-dark grad relative">
      {/* Left Section: Step and Description */}
      <div className="text-left text-white w-1/2">
        <h2 className="text-5xl font-medium mb-4 text-[#888888]">
          Step <span className="text-white">4</span>
        </h2>
        <hr className="w-12 my-5 h-1 bg-primary-blue" />
        <div className="flex items-center">
          <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
          <p className="text-desc font-semilbold">
            Tenant gets approved to move-in :
          </p>
          {/* Dotted arrow */}
        </div>
        <ul className="text-lg ml-5">
          <li className="mt-3 list-disc">
            Gets Zero-security deposit approval
          </li>
          <li className="mt-3 list-disc">Zero cost EMI = Monthly Rent</li>
        </ul>
      </div>

      {/* Right Section: Mobile Mockup */}
      {/* <div className="w-1/2 bg-white relative">
        <div className="relative h-full w-full flex justify-end items-center">
          <div className="h-full w-1 bg-gray-100 rounded-full relative">
            <div
              className="w-3 h-3 bg-white rounded-full relative"
              style={{ top: `${scrollPosition}%` }}
            ></div>
          </div>
        </div>
      </div> */}

      <div className="relative w-70 h-[550px] bg-black rounded-[3rem] border-4 border-gray-800 p-2">
        <div className="relative w-full h-8 bg-black rounded-t-[3rem] flex justify-center">
          <div className="relative w-1/3 h-6 bg-black rounded-b-xl"></div>
        </div>
        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          <StepFour />
        </div>
      </div>
    </div>
  );
};

export default StepFourScreen;
